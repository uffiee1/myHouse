using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using myHouse.Logic.Hubs;

namespace myHouse.Controllers
{
    [ApiController]
    [Route("api/message")]
    public class MessageController : Controller
    {
        private readonly IHubContext<MessageHub> _messageHub;

        public MessageController([NotNull] IHubContext<MessageHub> messageHub)
        {
            _messageHub = messageHub;
        }

        [HttpPost]
        public async Task<IActionResult> Create(MessagePost messagePost)
        {
            await _messageHub.Clients.All.SendAsync("sendToReact", "The message '" + messagePost.Message + "' has been received");

            return Ok();
        }
    }
}
