using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mailjet.Client;
using myHouse.EmailService.Common.Email.Model;
using myHouse.EmailService.Common.Email.Model.EmailSender;
using myHouse.EmailService.Common.Interfaces;
using Newtonsoft.Json.Linq;

namespace myHouse.EmailService.Common.Email.EmailProvidor
{
    public class MailJetProvidor : EmailSender, IEmailSender
    {
        protected override async Task Send(EmailModel email)
        {
            try
            {
                JArray jArray = new JArray();
                JArray attachments = new JArray();
                if (email.Attachments != null && email.Attachments.Count() > 0)
                {
                    email.Attachments.ToList().ForEach(attachment => attachments.Add(
                        new JObject
                        {
                            new JProperty("Content-Type", attachment.ContentType),
                            new JProperty("Filename", attachment.ContentType),
                            new JProperty("Content", Convert.ToBase64String(attachment.Data))
                        }));
                }
                jArray.Add(new JObject
                {
                    new JProperty("FromEmail", "u.angay@gmail.com"),
                    new JProperty("FromName", "Admin"),
                    new JProperty("Recipients", new JArray
                    {
                        new JObject
                        {
                            new JProperty("Email", email.EmailAdress),
                            new JProperty("Name", email.EmailAdress),
                        }
                    }),
                    new JProperty("Subject", email.Subject),
                    new JProperty("Text-part", email.Body),
                    new JProperty("Html-part", email.Body),
                    new JProperty("Attachments", attachments),
                });
                var client = EmailSender.CreateMailjetClient();
                var request = new MailjetRequest
                {
                    Resource = Mailjet.Client.Resources.Send.Resource
                }.Property(Mailjet.Client.Resources.Send.Messages, jArray);
                var response = await client.PostAsync(request);
                Console.WriteLine($"Send result {response.StatusCode} with message: {response.Content}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message.ToString());
                throw;
            }
        }
    }
}
