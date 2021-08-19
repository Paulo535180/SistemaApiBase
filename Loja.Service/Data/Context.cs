using Loja.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Loja.Service.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options) { }
        public DbSet<Usuario> PRLA_Usuario { get; set; }
        public DbSet<Perfil> PRLA_Perfil { get; set; }
        public DbSet<UsuarioPerfil> PRLA_Usuario_Perfil { get; set; }
    }
}

