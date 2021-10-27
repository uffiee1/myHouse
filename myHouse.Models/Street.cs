using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Street
    {
        [Key]
        public int StreetId { get; set; }

        public string StreetName { get; set; }

        public int DistrictId { get; set; }

        public virtual District District { get; set; }
    }
}
