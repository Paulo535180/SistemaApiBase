using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Service.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base (options)
        {
            
        }
    }
}
