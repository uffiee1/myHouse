using System.Collections.Generic;
using System.Threading.Tasks;
using Mailjet.Client;
using myHouse.EmailService.Common.Interfaces;

namespace myHouse.EmailService.Common.Email.Model.EmailSender
{
    public abstract class EmailSender : IEmailSender
    {
        protected static MailjetClient CreateMailjetClient()
        {
            return new MailjetClient("MailjetClient:API_SECRET", "MailjetClient:API_KEY");
        }

        protected abstract Task Send(EmailModel email);

        public async Task SendEmail(EmailModel emailModel)
        {
            await Send(emailModel);
        }

        public async Task SendEmail(string adress, string subject, string body, List<EmailAttachment> emailAttachment = null)
        {
            await Send(new EmailModel
            {
                Attachments = emailAttachment,
                Body = body,
                EmailAdres = adress,
                Subject = subject
            });
        }
    }
}
