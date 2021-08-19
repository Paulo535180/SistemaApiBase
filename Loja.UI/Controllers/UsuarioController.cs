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

        [HttpGet]
        public IActionResult Usuarios()
        {
            try
            {
                var usuario = _usuarioRepository.SelectAll();
                if (usuario == null)
                {
                    return NotFound("Lista de Usuários vazia!");
                }
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> UsuarioPorId(int id)
        {
            try
            {
                var usuario = await _usuarioRepository.SelectId(id);
                if (usuario != null)
                {
                    return StatusCode(200, usuario);
                }
                return NotFound("Nenhum Usuário encontrado!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] Usuario usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var usuarioExiste = await _usuarioRepository.SelectId(usuario.ID);
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

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Atualizar(int id, [FromBody] Usuario usuario)
        {
            try
            {
                if (id != usuario.ID)
                    return Conflict();
                if (!ModelState.IsValid)
                    return UnprocessableEntity(ModelState);

                await _usuarioRepository.Update(usuario);
                return Accepted();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _usuarioRepository.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
