using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class District
    {
        [Key]
        public int DistrictId { get; set; }

        public string DistrictName { get; set; }

        public int CityId { get; set; }

        public virtual City City { get; set; }

        public List<Street> Streets { get; set; }
    }
}
