using AutoMapper;
using Loja.Domain.Models;
using Loja.UI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.UI.Helpers
{
    public class SistemaLojaProfile : Profile
    {
        public SistemaLojaProfile()
        {
            CreateMap<Usuario, UsuarioViewModel>().ReverseMap();
        }
    }
}
