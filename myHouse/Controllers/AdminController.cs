using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace myHouse.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin, Administrator")]
    [ApiController]
    public class AdminController : ControllerBase
    {
    }
}
