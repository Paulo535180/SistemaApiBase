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
        /// <summary>
        /// Obtem um Usuário por ID
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("obterUsuario")]
        public IActionResult obterUsuario(int Id)
        {
            return Ok();
        }
    }
}
