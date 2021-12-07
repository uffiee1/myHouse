using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.EmailService.Common.Email.Model;

namespace myHouse.EmailService.Common.Interfaces
{
    public interface IEmailSender
    {
        // Email Sender Contract
        Task SendEmail(string adress, string subject, string body, List<EmailAttachment> emailAttachment = null);

        Task SendEmail(EmailModel emailModel);

        // Task SendEmailAsync(string email);
    }
}
