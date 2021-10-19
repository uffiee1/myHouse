using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Status
    {
        public int StatusId { get; set; }

        public string StatusName { get; set; }

        public List<Type> Types { get; set; }
    }
}
