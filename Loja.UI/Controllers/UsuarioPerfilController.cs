using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioPerfilController : Controller
    {
        private readonly IUsuarioPerfil _usuarioPerfil;
        public UsuarioPerfilController(IUsuarioPerfil usuarioPerfil)
        {
            _usuarioPerfil = usuarioPerfil;
        }

        [HttpGet]
        public IActionResult ObterUsuarioPerfil()
        {
            try
            {
                var UsuarioPerfis = _usuarioPerfil.SelectAll();
                if (UsuarioPerfis == null)
                {
                    return NotFound("Lista de Perfis vazia!");
                }
                return Ok(UsuarioPerfis);

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("idUsuario:int/idPerfil:int")]
        public async Task<IActionResult> VincularUsuarioPerfil(int idUsuario, int idPerfil)
        {
            try
            {
                var existeVinculo = await _usuarioPerfil.ExisteVinculo(idUsuario, idPerfil);
                if (!existeVinculo)
                {
                    var usuarioPerfil = new UsuarioPerfil
                    {
                        ID_PERFIL = idPerfil,
                        ID_USUARIO = idUsuario,
                        DATA_CRIACAO = DateTime.Now,
                        STATUS = true,
                        USUARIO_CRIACAO = "Teste"
                    };
                    await _usuarioPerfil.Insert(usuarioPerfil);
                    return Ok("Objeto Criado");
                }
                throw new Exception("Vinculo já existe");


            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}
