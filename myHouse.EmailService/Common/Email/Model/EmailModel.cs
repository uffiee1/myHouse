using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace myHouse.EmailService.Common.Email.Model
{
    public class EmailModel
    {
        public string EmailAdres { get; set; } = string.Empty;

        public string Subject { get; set; } = string.Empty;

        public string Body { get; set; } = string.Empty;

        public IEnumerable<EmailAttachment> Attachments { get; set; }
    }
}
