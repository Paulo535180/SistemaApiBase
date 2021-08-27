using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Loja.Service.Data;
using Loja.Service.Interfaces;
using Loja.Service.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Loja.UI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

       
        public void ConfigureServices(IServiceCollection services)
        {

            //Configura��o do DbContext
            services.AddDbContext<Context>(options => options.UseSqlServer(Configuration.GetConnectionString("Context")));
            services.AddCors();
            services.AddMvc();
            services.AddRazorPages();
            services.AddSwaggerGen(s =>
            {
                s.SwaggerDoc("v1", new OpenApiInfo { Title = "Documenta��o da Api", Version = "v1", });

                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                s.IncludeXmlComments(xmlPath, includeControllerXmlComments: true);
            });


            // Tipos de ciclo de vida do objeto: 
            // Transciente: Obt�m uma nova inst�ncia do objeto a cada solicita��o
            // Scoped: Reutiliza a mesma inst�ncia do objeto durante todo o request(web)
            // Singleton: Utiliza a mesma inst�ncia para toda a aplica��o(cuidado em casos de utiliza��o de mais de um servidor)
            services.AddScoped<IDbConnection>(conn => new SqlConnection(Configuration.GetConnectionString("Context")));
            services.AddScoped<IUsuario, UsuarioRepository>();
            services.AddScoped<IPerfil, PerfilRepository>();
            services.AddScoped<IUsuarioPerfil, UsuarioPerfilRepository>();
        }

       
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(cors => cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();

            app.UseSwaggerUI(s =>
            {
                s.RoutePrefix = string.Empty;
                s.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
            });
        }
    }
}
