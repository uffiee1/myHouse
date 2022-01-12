using System.ComponentModel.DataAnnotations;

namespace myHouse.Models
{
    public class Status
    {
        [Required]
        [Display(Name = "Status")]
        public string StatusId { get; set; }

        public string StatusName { get; set; }

        public const string Sale = "For Sale";
        public const string Rent = "For Rent";

        // public List<Type> Types { get; set; }
    }
}
