using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace myHouse.Models.Authentication
{
    public class Register
    {
        [Required(ErrorMessage = "Name is Required")]
        [DisplayName("Name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address...")]
        [DisplayName("Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Username is Required")]
        [DisplayName("Username")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        [DisplayName("Password")]
        public string Password { get; set; }

        // [Required]
        // [Compare("Password", ErrorMessage = "Passwords do not match...")]
        // [DisplayName("Password Again")]
        // public string RePassword { get; set; }
    }
}
