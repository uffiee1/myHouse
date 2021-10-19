using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myHouse.Models
{
    public class Picture
    {
        public int PictureId { get; set; }

        public string PictureName { get; set; }

        public int AdvertId { get; set; }

        public virtual Property Advert { get; set; }
    }
}
