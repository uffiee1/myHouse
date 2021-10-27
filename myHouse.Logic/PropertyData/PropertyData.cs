using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.Models;

namespace myHouse.Logic.PropertyData
{
    public class PropertyData : IPropertyData
    {
        private List<Property> _properties = new List<Property>()
        {
            new Property()
            {
                Id = Guid.NewGuid(),
                Description = "Huis 1",
                Price = 5000,
                Address = "MockAdress 1"
            },
            new Property()
            {
                Id = Guid.NewGuid(),
                Description = "Huis 2",
                Price = 5000,
                Address = "MockAdress 2"
            }
        };

        public Property AddProperty(Property property)
        {
            property.Id = Guid.NewGuid();
            _properties.Add(property);
            return property;
        }

        public void DeleteProperty(Property property)
        {
            _properties.Remove(property);
        }

        public Property EdiProperty(Property property)
        {
            var existProperty = GetProperty(property.Id);
            existProperty.Address = property.Address;
            existProperty.Description = property.Description;
            existProperty.Floor = property.Floor;
            existProperty.Phone = property.Phone;
            existProperty.Parcel = property.Parcel;
            existProperty.Price = property.Price;
            existProperty.Street = property.Street;
            existProperty.Rooms = property.Rooms;
            existProperty.Type = property.Type;
            return existProperty;
        }

        public List<Property> GetProperties()
        {
            return _properties;
        }

        public Property GetProperty(Guid id)
        {
            return _properties.SingleOrDefault(x => x.Id == id);
        }
    }
}
