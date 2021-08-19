using Loja.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Loja.Service.Interfaces
{
    public interface IPerfil
    {
        IList<Perfil> SelectAll();
        Task<Perfil> SelectId(int id);
        Task Insert(Perfil perfil);
        Task Update(Perfil perfil);
        Task Delete(int id);
        Task DeleteRange(Perfil[] perfis);
    }
}