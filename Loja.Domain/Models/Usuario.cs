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
        [JsonPropertyName("id")]
        public int ID { get; set; }

        [JsonPropertyName("nome")]
        [Required(ErrorMessage = "Campo Nome é obrigatório!")]
        public string NOME { get; set; }

        [JsonPropertyName("cpf")]
        [Required(ErrorMessage = "Campo Cpf é obrigatório!")]
        public string CPF { get; set; }

        [JsonPropertyName("email")]
        [Required(ErrorMessage = "Campo Email é obrigatório!")]       
        public string EMAIL { get; set; }

        [JsonPropertyName("login")]
        [Required(ErrorMessage = "Campo Login é obrigatório!")]        
        public string LOGIN { get; set; }

        [JsonPropertyName("senha")]
        [Required(ErrorMessage = "Senha obrigatória!")]
        public string SENHA { get; set; }

        [JsonPropertyName("foto")]
        public string FOTO { get; set; }

        [JsonPropertyName("telefone")]
        public string TELEFONE { get; set; }

        [JsonPropertyName("data_nascimento")]
        public DateTime? DATA_NASCIMENTO { get; set; }

        [JsonPropertyName("status")]
        public bool STATUS { get; set; }

        [JsonPropertyName("data_criacao")]
        public DateTime? DATA_CRIACAO { get; set; }

        [JsonPropertyName("usuario_criacao")]
        public string USUARIO_CRIACAO { get; set; }

        [JsonPropertyName("data_alteracao")]
        public DateTime? DATA_ALTERACAO { get; set; }

        [JsonPropertyName("usuario_alteracao")]
        public string USUARIO_ALTERACAO { get; set; }
    }
}
