using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models.Authentication
{
    public class Login
    {
        [Required(ErrorMessage = "Username is Required")]
        [DisplayName("Username")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        [DisplayName("Password")]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
