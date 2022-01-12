using System;

namespace myHouse.Models
{
    public class Estate
    {
        public Guid Id { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        // Status of Estate (Visible/invisible)
        public bool isVisible { get; set; }

        // Type of Estate (Sell/Rent)
        public string Type { get; set; }

        // public ICollection<User> User { get; set; }

        // public List<Picture> Pictures { get; set; }
    }
}
