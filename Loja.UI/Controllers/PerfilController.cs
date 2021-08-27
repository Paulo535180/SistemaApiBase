using Loja.Domain.Models;
using Loja.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loja.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilController : ControllerBase
    {
        private readonly IPerfil _perfil;
        public PerfilController(IPerfil perfil)
        {
            _perfil = perfil;
        }

        [HttpGet("Perfis")]
        public IActionResult Perfis()
        {
            try
            {
                var perfis = _perfil.SelectAll();
                if (perfis == null)
                {
                    return NotFound("Lista de Perfis vazia!");
                }
                return Ok(perfis);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> PerfilPorId(int id)
        {
            try
            {
                var perfil = await _perfil.SelectId(id);
                if (perfil != null)
                {
                    return StatusCode(200, perfil);
                }
                return NotFound("Nenhum Perfil encontrado!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] Perfil perfil)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await _perfil.Insert(perfil);
                    return StatusCode(201, "Objeto criado");
                }
                throw new Exception("Modelo inválido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Atualizar(int id, [FromBody] Perfil perfil)
        {
            try
            {
                if (id != perfil.ID)
                    return Conflict();
                if (!ModelState.IsValid)
                    return UnprocessableEntity(ModelState);

                await _perfil.Update(perfil);
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
                await _perfil.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
