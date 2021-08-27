using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace Loja.Domain.Models
{
    [Table("PRLA_Perfil")]
    public class Perfil
    {
        [Key]
        [JsonPropertyName("id")]
        public int ID { get; set; }

        [JsonPropertyName("perfil")]
        public string PERFIL { get; set; }

        [JsonPropertyName("descricao")]
        public string DESCRICAO { get; set; }

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