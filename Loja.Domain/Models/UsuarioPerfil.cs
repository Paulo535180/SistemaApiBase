using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Domain.Models
{
    public class UsuarioPerfil
    {
        public int ID { get; set; }
        public int ID_USUARIO { get; set; }
        public int ID_PERFIL { get; set; }
        public bool STATUS { get; set; }
        public DateTime? DATA_CRIACAO { get; set; }
        public string USUARIO_CRIACAO { get; set; }
        public DateTime? DATA_ALTERACAO { get; set; }
        public string USUARIO_ALTERACAO { get; set; }
    }
}
