using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.DAL;
using myHouse.Models;

namespace myHouse.UnitTests
{
    public class DummyDataDBInitializer
    {
        public DummyDataDBInitializer()
        {
        }

        public void Seed(AppDbContext context)
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            context.Estate.AddRange(
                new Estate() {Id = Guid.NewGuid(), Description = "Estate 1", Price = 1000, City = "MockCity 1", Street = "MockStreet 1", Status = 1 , }, 
                new Estate() {Id = Guid.NewGuid(), Description = "Estate 2", Price = 2000, City = "MockCity 2", Street = "MockStreet 2", Status = 2 , }

            );
            context.SaveChanges();
        }
    }
}