using Loja.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Loja.Domain.Interfaces
{
    public interface IUsuario
    {
        IList<Usuario> SelectAll();
        Task<Usuario> SelectId(int id);
        Task Insert(Usuario usuario);
        Task Update(Usuario usuario);
        Task Delete(int id);
        Task DeleteRange(Usuario[] usuarios);
        Task<Usuario> ExisteUsuario(string cpf);
    }
}