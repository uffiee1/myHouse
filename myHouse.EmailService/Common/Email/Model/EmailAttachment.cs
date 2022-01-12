namespace myHouse.EmailService.Common.Email.Model
{
    public class EmailAttachment
    {
        public string Name { get; set; } = string.Empty;

        public string ContentType { get; set; } = string.Empty;

#pragma warning disable SA1401 // Fields should be private
        public byte[] Data = new byte[0];
#pragma warning restore SA1401 // Fields should be private
    }
}
