using Loja.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Domain.Interfaces
{
    public interface IUsuarioPerfil
    {
        IList<UsuarioPerfil> SelectAll();
        Task<UsuarioPerfil> SelectId(int id);
        Task Insert(UsuarioPerfil usuarioPerfil);
        Task Update(UsuarioPerfil usuarioPerfil);
        Task Delete(int id);
        Task DeleteRange(UsuarioPerfil[] UsuarioPerfis);
        
    }
}
