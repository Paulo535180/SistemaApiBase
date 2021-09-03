using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.UI.ViewModels
{
    public class UsuarioViewModel
    {
        public int id { get; set; }
        public string nome { get; set; }

        public string cpf { get; set; }

        public string email { get; set; }

        public string login { get; set; }

        public string foto { get; set; }

        public string telefone { get; set; }
        public string senha { get; set; }

        public DateTime? data_nascimento { get; set; }

        public bool status { get; set; }
    }
}
