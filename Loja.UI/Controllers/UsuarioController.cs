﻿using Loja.Domain.Interfaces;
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


        /// <summary>
        /// Obtem um Usuário por ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("obterUsuario")]
        public async Task<IActionResult> obterUsuario(int id)
        {
            try
            {
                var GetUsuario = await _usuarioRepository.ObterUsuario(id);
                return Ok(GetUsuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }    

        }
    }
}
