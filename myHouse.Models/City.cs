using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class City
    {
        public int CityId { get; set; }

        public string CityName { get; set; }

        public List<District> Districts { get; set; }
    }
}
