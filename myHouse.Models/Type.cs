using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Type
    {
        [Key]
        public int TypeId { get; set; }

        public string TypeName { get; set; }

        public int StatusId { get; set; }

        public virtual Status Status { get; set; }
    }
}
