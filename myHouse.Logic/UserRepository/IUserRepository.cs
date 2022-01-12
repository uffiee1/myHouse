using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.Models;
using myHouse.Models.Authentication;

namespace myHouse.Logic.UserRepository
{
    public interface IUserRepository
    {
        User Create(User user);

        User getByEmail(string email);

        User getById(int id);
    }
}
