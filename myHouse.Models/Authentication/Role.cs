using System.ComponentModel.DataAnnotations;

namespace myHouse.Models.Authentication
{
    public class Role
    {
        [Key]
        public int RoleId { get; set; }

        [Required]
        [Display(Name = "Role")]
        public string RoleName { get; set; }

        public const string Administrator = "Admin";
        public const string Gebruiker = "User";
        public const string Gast = "Guest";
    }
}
