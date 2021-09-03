using AutoMapper;
using Dapper;
using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Loja.Service.Data;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.Service.Repository
{
    public class UsuarioRepository : IUsuario
    {
        private readonly Context _context;
        private readonly IDbConnection _connection;
        private readonly IMapper _mapper;
        public UsuarioRepository(Context context, IDbConnection connection, IMapper mapper)
        {
            _context = context;
            _connection = connection;
            _mapper = mapper;
        }

        public IList<Usuario> SelectAll()
        {
            return  _context.Set<Usuario>().ToList();            
        }

        public async Task<Usuario> SelectId(int id)
        {
            return await _context.FindAsync<Usuario>(id);
        }
        public async Task Insert(Usuario usuario)
        {
            _context.Set<Usuario>().Add(usuario);
            await SaveChanges();
        }
        public async Task Update(Usuario usuario)
        {
            _context.Update(usuario);
            await SaveChanges();
        }
        public async Task Delete(int id)
        {
            _context.Remove(id);
            await SaveChanges();
        }

        public async Task<Usuario> ExisteUsuario(string cpf)
        {
            var existeUsuario = await _connection.QueryFirstOrDefaultAsync<Usuario>(@"
            select *

            from PRLA_Usuario

            where CPF = @cpf ", new { cpf });
            return existeUsuario;
        }

        public async Task DeleteRange(Usuario[] usuarios)
        {
            _context.RemoveRange(usuarios);
            await SaveChanges();
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
