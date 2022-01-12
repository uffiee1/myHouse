using myHouse.Models;

namespace myHouse.Logic.UserRepository
{
    public interface IUserRepository
    {
        User Create(User user);

        User getByEmail(string email);

        User getById(int id);
    }
}
