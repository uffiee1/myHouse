using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mailjet.Client.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myHouse.Models.Authentication;

namespace myHouse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        //[AllowAnonymous]
        //[HttpPost("login")]
        //public async Task<ActionResult<User>> Login(Login.Query query)
        //{
        //    return await Mediator.Send(query);
        //}

        //[AllowAnonymous]
        //[HttpPost("register")]
        //public async Task<ActionResult<User>> Register(Register.Command command)
        //{
        //    return await Mediator.Send(command);
        //}

        //[HttpGet]
        //public async Task<ActionResult<User>> GetCurrentUser()
        //{
        //    return await Mediator.Send(new CurrentUser.Query());
        //}
    }
}
