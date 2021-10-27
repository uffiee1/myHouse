using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.Models;

namespace myHouse.Logic.PropertyData
{
    public interface IPropertyData
    {
        List<Property> GetProperties();

        Property GetProperty(Guid id);

        Property AddProperty(Property property);

        void DeleteProperty(Property property);

        Property EdiProperty(Property property);
    }
}
