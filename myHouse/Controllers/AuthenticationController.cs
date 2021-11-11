using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using myHouse.Models.Authentication;
using JwtRegisteredClaimNames = System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames;

namespace myHouse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public AuthenticationController(
            UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] Register registerModel)
        {
            var userExists = await _userManager.FindByNameAsync(registerModel.Username);
            if (userExists != null)
            {
                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    new Response { Status = "Error", Message = "User Already Exists" });
            }

            ApplicationUser user = new ()
            {
                Email = registerModel.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = registerModel.Username,
            };

            var result = await _userManager.CreateAsync(user, registerModel.Password);
            if (!result.Succeeded)
            {
                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    new Response { Status = "Error", Message = "Account Creating failed. Please check user details and try again." });
            }

            return Ok(new Response { Status = "Success", Message = "User created Successfully!" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] Register registerModel)
        {
            var userExists = await _userManager.FindByNameAsync(registerModel.Username);
            if (userExists != null)
            {
                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    new Response { Status = "Error", Message = "User Already Exists" });
            }

            ApplicationUser user = new ()
            {
                Email = registerModel.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = registerModel.Username,
            };

            var result = await _userManager.CreateAsync(user, registerModel.Password);
            if (!result.Succeeded)
            {
                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    new Response { Status = "Error", Message = "Account Creating failed. Please check user details and try again." });
            }

            if (!await _roleManager.RoleExistsAsync(Role.Administrator))
            {
                await _roleManager.CreateAsync(new IdentityRole(Role.Administrator));
            }

            if (!await _roleManager.RoleExistsAsync(Role.Gebruiker))
            {
                await _roleManager.CreateAsync(new IdentityRole(Role.Gebruiker));
            }

            if (!await _roleManager.RoleExistsAsync(Role.Gast))
            {
                await _roleManager.CreateAsync(new IdentityRole(Role.Gast));
            }

            if (await _roleManager.RoleExistsAsync(Role.Administrator))
            {
                await _userManager.AddToRoleAsync(user, Role.Administrator);
            }
            return Ok(new Response { Status = "Success", Message = "User created Successfully!" });
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Login loginModel)
        {
            var user = await _userManager.FindByNameAsync(loginModel.Username);
            if (user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:SecretKey"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), expiration = token.ValidTo });
            }

            return Unauthorized();
        }
    }
}
