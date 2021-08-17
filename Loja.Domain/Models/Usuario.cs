using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Loja.Domain.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo Nome é obrigatório!")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Campo Cpf é obrigatório!")]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "Campo Email é obrigatório!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Campo Login é obrigatório!")]
        //[RegularExpression(@"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Senha obrigatória!")]
        public string Senha { get; set; }

        public DateTime Data_Nascimento { get; set; }
        public bool Status { get; set; }
        public DateTime? Data_Criacao { get; set; }
        public string Usuario_Criacao { get; set; }
        public DateTime? Data_Alteracao { get; set; }
        public string Usuario_Alteracao { get; set; }
    }
}
