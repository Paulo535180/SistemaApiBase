using AutoMapper;
using Loja.Domain.Interfaces;
using Loja.Domain.Models;
using Loja.UI.ViewModels;
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
        private readonly IMapper _mapper;
        public UsuarioController(IUsuario usuario, IMapper mapper)
        {
            _usuarioRepository = usuario;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Usuarios()
        {
            try
            {
                var usuarios = _usuarioRepository.SelectAll();
                if (usuarios == null)
                {
                    return NotFound("Lista de Usuários vazia!");
                }
                
                return Ok(usuarios);
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
        public async Task<IActionResult> Criar([FromBody] UsuarioViewModel usuarioModel)
        {
            try
            {
                var usuario = _mapper.Map<Usuario>(usuarioModel);
                if (ModelState.IsValid)
                {
                    //Pesquisar usuario sempre por CPF
                    var usuarioExiste = await _usuarioRepository.ExisteUsuario(usuario.CPF);
                    if (usuarioExiste == null)
                    {
                        usuario.STATUS = true;
                        usuario.DATA_CRIACAO = DateTime.Now;
                        usuario.USUARIO_CRIACAO = usuarioModel.nome;
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
        public async Task<IActionResult> Atualizar(int id, [FromBody] UsuarioViewModel usuarioModel)
        {
            try
            {
                if (id != usuarioModel.id)
                    return Conflict();

                if (!ModelState.IsValid)
                    return UnprocessableEntity(ModelState);

                var usuario = await  _usuarioRepository.SelectId(usuarioModel.id);
                if (usuario == null) return NotFound("Usuario não encontrado!");

                usuarioModel.id = usuario.ID;

                _mapper.Map(usuarioModel,usuario);

                usuario.DATA_ALTERACAO = DateTime.Now;
                usuario.USUARIO_ALTERACAO = usuario.NOME;
                await _usuarioRepository.Update(usuario);

                return Accepted("Atualizado!");
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
                return Ok("Deletado");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
