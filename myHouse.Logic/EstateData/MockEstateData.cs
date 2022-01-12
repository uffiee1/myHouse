using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.DAL;
using myHouse.Models;

namespace myHouse.Logic.EstateData
{
    public class MockEstateData : IEstateData
    {
        private readonly List<Estate> _estates = new List<Estate>()
        {
            new Estate()
            {
                Id = Guid.NewGuid(),
                Description = "Estate 1",
                Price = 1000,
                City = "MockCity 1",
                Street = "MockStreet 1",
                isVisible = true
            },
            new Estate()
            {
                Id = Guid.NewGuid(),
                Description = "Estate 2",
                Price = 2000,
                City = "MockCity 2",
                Street = "MockStreet 2",
                isVisible = false
            }
        };

        public Estate AddEstate(Estate estate)
        {
            estate.Id = Guid.NewGuid();
            _estates.Add(estate);
            return estate;
        }

        public void DeleteEstate(Estate estate)
        {
            _estates.Remove(estate);
        }

        public Estate EditEstate(Estate estate)
        {
            var existEstate = GetEstate(estate.Id);
            existEstate.Description = estate.Description;
            existEstate.Price = estate.Price;
            existEstate.City = estate.City;
            existEstate.Street = estate.Street;
            existEstate.isVisible = estate.isVisible;
            return existEstate;
        }

        public Estate GetEstate(Guid id)
        {
            return _estates.SingleOrDefault(x => x.Id == id);
        }

        public List<Estate> GetEstates()
        {
            return _estates;
        }
    }
}
