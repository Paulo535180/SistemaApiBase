using Loja.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Loja.Service.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options) { }
        public DbSet<Usuario> PRLA_Usuario { get; set; }
    }
}

