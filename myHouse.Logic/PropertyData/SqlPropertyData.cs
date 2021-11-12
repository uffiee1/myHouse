// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using myHouse.DAL;
// using myHouse.Models;
//
// namespace myHouse.Logic.PropertyData
// {
//     public class SqlPropertyData : IPropertyData
//     {
//         private AppDbContext _properties;
//
//         public SqlPropertyData(AppDbContext propertyContext)
//         {
//             _properties = propertyContext;
//         }
//
//         public Property AddProperty(Property property)
//         {
//             property.Id = Guid.NewGuid();
//             _properties.Property.Add(property);
//             _properties.SaveChanges();
//             return property;
//         }
//
//         public void DeleteProperty(Property property)
//         {
//             _properties.Property.Remove(property);
//             _properties.SaveChanges();
//         }
//
//         public Property EditProperty(Property property)
//         {
//             var existProperty = _properties.Property.Find(property.Id);
//             if (existProperty != null)
//             {
//                 existProperty.Address = property.Address;
//                 existProperty.Description = property.Description;
//                 existProperty.Floor = property.Floor;
//                 existProperty.Phone = property.Phone;
//                 existProperty.Parcel = property.Parcel;
//                 existProperty.Price = property.Price;
//                 existProperty.Street = property.Street;
//                 existProperty.Rooms = property.Rooms;
//                 existProperty.Type = property.Type;
//
//                 _properties.Property.Update(existProperty);
//                 _properties.SaveChanges();
//             }
//             return property;
//         }
//
//         public List<Property> GetProperties()
//         {
//             return _properties.Property.ToList();
//         }
//
//         public Property GetProperty(Guid id)
//         {
//             var property = _properties.Property.Find(id);
//             return property;
//
//             // return _properties.Property.SingleOrDefault(x => x.Id == id);
//         }
//     }
// }
