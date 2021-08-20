using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace Loja.Domain.Models
{
    [Table("PRLA_Usuario")]
    public class Usuario
    {
        [Key]
        public int ID { get; set; }

        [Required(ErrorMessage = "Campo Nome é obrigatório!")]
        public string NOME { get; set; }

        [Required(ErrorMessage = "Campo Cpf é obrigatório!")]
        public string CPF { get; set; }

        [Required(ErrorMessage = "Campo Email é obrigatório!")]
       
        public string EMAIL { get; set; }

        [Required(ErrorMessage = "Campo Login é obrigatório!")]
        
        public string LOGIN { get; set; }

        [Required(ErrorMessage = "Senha obrigatória!")]
        public string SENHA { get; set; }

        public string FOTO { get; set; }

        public string TELEFONE { get; set; }

        [JsonPropertyName("data_nascimento")]
        public DateTime? DATA_NASCIMENTO { get; set; }

        public bool STATUS { get; set; }

        public DateTime? DATA_CRIACAO { get; set; }

        public string USUARIO_CRIACAO { get; set; }

        public DateTime? DATA_ALTERACAO { get; set; }

        public string USUARIO_ALTERACAO { get; set; }
    }
}
