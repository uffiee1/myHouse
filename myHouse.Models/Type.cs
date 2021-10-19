using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Type
    {
        public int TipId { get; set; }

        public string TipAd { get; set; }

        public int DurumId { get; set; }

        public virtual Status Status { get; set; }
    }
}
