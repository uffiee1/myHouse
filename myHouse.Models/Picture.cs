using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Picture
    {
        [Key]
        public int PictureId { get; set; }

        public string PictureName { get; set; }

        public int AdvertId { get; set; }

        public virtual Property Property { get; set; }
    }
}
