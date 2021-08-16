﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Loja.Domain.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double Valor { get; set; }
        public byte[] Imagem { get; set; }
    }
}
