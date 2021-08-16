using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Loja.Service.Data;
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
            return await _context.FindAsync<Usuario>(id);
        }
    }
}
