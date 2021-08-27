using Dapper;
using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Loja.Service.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Service.Repository
{
    public class UsuarioPerfilRepository : IUsuarioPerfil
    {
        private readonly Context _context;
        private readonly IDbConnection _connection;
        public UsuarioPerfilRepository(Context context, IDbConnection connection)
        {
            _context = context;
            _connection = connection;
        }

        public IList<UsuarioPerfil> SelectAll()
        {
            return _context.Set<UsuarioPerfil>().ToList();
        }

        public async Task<UsuarioPerfil> SelectId(int id)
        {
            return await _context.FindAsync<UsuarioPerfil>(id);
        }
        public async Task Insert(UsuarioPerfil usuarioPerfil)
        {
            _context.Set<UsuarioPerfil>().Add(usuarioPerfil);
            await SaveChanges();
        }
        public async Task Update(UsuarioPerfil usuarioPerfil)
        {
            _context.Update(usuarioPerfil);
            await SaveChanges();
        }
        public async Task Delete(int id)
        {
            _context.Remove(id);
            await SaveChanges();
        }

        public async Task DeleteRange(UsuarioPerfil[] UsuarioPerfis)
        {
            _context.RemoveRange(UsuarioPerfis);
            await SaveChanges();
        }

        public async Task<bool> ExisteVinculo(int idUsuario, int idPerfil)
        {
            var pesquisarVinculo = await _connection.QueryFirstOrDefaultAsync<bool>(@"
            select count(*) 

            from PRLA_Usuario_Perfil 

            where ID_USUARIO = @idUsuario and ID_PERFIL = @idPerfil", new { idUsuario, idPerfil });
            return pesquisarVinculo;
        }

        public void Dispose()
        {
            _context?.Dispose();
        }

        public virtual async Task<int> SaveChanges()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
