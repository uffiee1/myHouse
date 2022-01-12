using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.DAL;
using myHouse.Models;
using myHouse.Models.Authentication;

namespace myHouse.Logic.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.User.Add(user);
            user.Id = _context.SaveChanges();
            return user;
        }

        public User getByEmail(string email)
        {
            return _context.User.FirstOrDefault(u => u.Email == email);
        }

        public User getById(int id)
        {
            return _context.User.FirstOrDefault(u => u.Id == id);
        }
    }
}
