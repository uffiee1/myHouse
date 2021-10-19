using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Street
    {
        public int StreetId { get; set; }

        public string StreetAd { get; set; }

        public int DistrictId { get; set; }

        public virtual District District { get; set; }
    }
}
