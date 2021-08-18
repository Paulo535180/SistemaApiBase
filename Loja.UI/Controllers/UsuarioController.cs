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
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuario _usuarioRepository;
        public UsuarioController(IUsuario usuario)
        {
            _usuarioRepository = usuario;
        }

        [HttpPost]
        public async Task<IActionResult> CriarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var usuarioExiste = _usuarioRepository.SelectId(usuario.ID);
                    if (usuario != null)
                    {
                        await _usuarioRepository.Insert(usuario);
                        return StatusCode(201, "Objeto criado");
                    }
                    throw new Exception("Usuário já existe na Base de Dados!");
                }
                throw new Exception("Modelo inválido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
