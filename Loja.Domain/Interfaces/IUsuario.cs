using Loja.Domain.Models;
using System.Threading.Tasks;

namespace Loja.Domain.Interfaces
{
    public interface IUsuario
    {
        Task<Usuario> ObterUsuario(int id);       
    }
}
