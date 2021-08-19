using Loja.Domain.Models;
using Loja.Service.Data;
using Loja.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Loja.Service.Repository
{
    public class PerfilRepository : IPerfil
    {
        private readonly Context _context;
        public PerfilRepository(Context context)
        {
            _context = context;
        }
        public IList<Perfil> SelectAll()
        {
            return _context.Set<Perfil>().ToList();
        }

        public async Task<Perfil> SelectId(int id)
        {
            return await _context.FindAsync<Perfil>(id);
        }
        public async Task Insert(Perfil perfil)
        {
            _context.Set<Perfil>().Add(perfil);
            await SaveChanges();
        }
        public async Task Update(Perfil perfil)
        {
            _context.Update(perfil);
            await SaveChanges();
        }
        public async Task Delete(int id)
        {
            _context.Remove(id);
            await SaveChanges();
        }

        public async Task DeleteRange(Perfil[] perfis)
        {
            _context.RemoveRange(perfis);
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
