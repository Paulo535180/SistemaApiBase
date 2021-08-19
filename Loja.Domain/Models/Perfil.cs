using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Loja.Domain.Models
{
    [Table("PRLA_Perfil")]
    public class Perfil
    {
        [Key]
        public int ID { get; set; }
        public string PERFIL { get; set; }
        public string DESCRICAO { get; set; }
        public bool STATUS { get; set; }
        public DateTime? DATA_CRIACAO { get; set; }
        public string USUARIO_CRIACAO { get; set; }
        public DateTime? DATA_ALTERACAO { get; set; }
        public string USUARIO_ALTERACAO { get; set; }
    }
}
