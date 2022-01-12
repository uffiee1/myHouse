using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Threading.Tasks.Dataflow;
using Microsoft.Extensions.Hosting;
using myHouse.EmailService.Common.Email.EmailProvidor;
using myHouse.EmailService.Common.Email.Model;
using myHouse.EmailService.Common.Interfaces;

namespace myHouse.EmailService.HostedServices
{
    public class EmailHostedService : IHostedService, IDisposable
    {
        private Task _sendTask;
        private CancellationTokenSource _cancellationToken;
        private BufferBlock<EmailModel> _mailQueue;
        private IEmailSender _mailSender;

        public EmailHostedService()
        {
            _mailSender = new MailJetProvidor();
            _mailQueue = new BufferBlock<EmailModel>();
            _cancellationToken = new CancellationTokenSource();
        }

        /// <summary>
        /// Method send email - wakeup BufferBlock.
        /// </summary>
        /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
#pragma warning disable SA1611 // Element parameters should be documented
        public async Task SendEmailAsync(EmailModel emailModel)
#pragma warning restore SA1611 // Element parameters should be documented
        {
            await _mailQueue.SendAsync(emailModel);
        }

        public void Dispose()
        {
            DestroyTask();
        }

        private void DestroyTask()
        {
            try
            {
                if (_cancellationToken != null)
                {
                    _cancellationToken.Cancel();
                    _cancellationToken = null;
                }
                Console.WriteLine("[EMAIL SERVICE] DESTROY SERVICE");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            Console.WriteLine("[EMAIL SERVICE] START SERVICE");
            _sendTask = BackgroundSendEmailAsync(_cancellationToken!.Token);
            return Task.CompletedTask;
        }

        private async Task BackgroundSendEmailAsync(CancellationToken token)
        {
            // Listen when have signal from BufferBlock
            while (!token.IsCancellationRequested)
            {
                try
                {
                    var email = await _mailQueue.ReceiveAsync();
                    await _mailSender.SendEmail(email);
                }
                catch (OperationCanceledException)
                {
                    break;
                }
                catch (Exception e)
                {
                    Console.WriteLine($"[EMAIL SERVICE] Exception: {e.Message}");
                }
            }
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            DestroyTask();
            await Task.WhenAny(_sendTask!, Task.Delay(Timeout.Infinite, cancellationToken));
        }
    }
}
