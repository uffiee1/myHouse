using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Property
    {
        public int PropertyId { get; set; }

        public string Description { get; set; }

        public double Prices { get; set; }

        public int Rooms { get; set; }

        public int Parcel { get; set; }

        public string Floor { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string Username { get; set; }

        public int CityId { get; set; }

        public int DistrictId { get; set; }

        public int StatusId { get; set; }

        public int StreetId { get; set; }

        public Street Street { get; set; }

        public int TypeId { get; set; }

        public Type Type { get; set; }

        public List<Picture> Pictures { get; set; }
    }
}
