using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Loja.Service.Data;
using System;
using System.Data;
using System.Threading.Tasks;

namespace Loja.Service.Repository
{
    public class UsuarioRepository : IUsuario
    {
        private readonly Context _context;
        public UsuarioRepository(Context context)
        {
            _context = context;
        }
        public async Task<Usuario> ObterUsuario(int id)
        {
            var usuario = new Usuario
            {
                Nome = "Paulo Ricardo Lima Aguiar",
                Cpf = "468.197.308-45",
                Data_Nascimento = DateTime.Now,
                Email = "Paulo535180@gmail.com",
                Login = "Paulo_rla",
                Senha = "38785351",
                Id = 1
            };
            return usuario;
        }
    }
}
