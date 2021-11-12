using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace myHouse.Controllers
{
    public class MessagePost
    {
        public virtual string Message { get; set; }
    }
}
