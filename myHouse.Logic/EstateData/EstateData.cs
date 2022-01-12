using System;
using System.Collections.Generic;
using System.Linq;
using myHouse.DAL;
using myHouse.Models;

namespace myHouse.Logic.EstateData
{
    public class EstateData : IEstateData
    {
        private readonly AppDbContext _estates;

        public EstateData(AppDbContext estateContext)
        {
            _estates = estateContext;
        }

        public Estate AddEstate(Estate estate)
        {
            estate.Id = Guid.NewGuid();
            _estates.Estate.Add(estate);
            _estates.SaveChanges();
            return estate;
        }

        public void DeleteEstate(Estate estate)
        {
            _estates.Estate.Remove(estate);
            _estates.SaveChanges();
        }

        public Estate EditEstate(Estate estate)
        {
            var existEstate = _estates.Estate.Find(estate.Id);
            if (existEstate != null)
            {
                existEstate.Description = estate.Description;
                existEstate.Price = estate.Price;
                existEstate.City = estate.City;
                existEstate.Street = estate.Street;
                existEstate.isVisible = estate.isVisible;

                // existEstate.Type = estate.Type;
                _estates.Estate.Update(existEstate);
                _estates.SaveChanges();
            }
            return estate;
        }

        public Estate GetEstate(Guid id)
        {
            var estate = _estates.Estate.Find(id);
            return estate;

            // return _estates.Estate.SingleOrDefault(x => x.Id == id);
        }

        public List<Estate> GetEstates()
        {
            return _estates.Estate.ToList();
        }
    }
}
