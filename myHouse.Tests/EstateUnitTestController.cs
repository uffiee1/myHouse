using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myHouse.DAL;
using myHouse.Logic.EstateData;

namespace myHouse.UnitTests
{
    public class EstateUnitTestController
    {
        private EstateData estateData;
        public static DbContextOptions<AppDbContext> dbContextOptions { get; }
        public static string connectionString = "User ID=Ufuk;Password=Password;Server=localhost;Port=5433;Database=myhousedb;Integrated Security=true;Pooling=true;";

        static EstateUnitTestController()
        {
            dbContextOptions = new DbContextOptionsBuilder<AppDbContext>()
                .UseSqlServer(connectionString)
                .Options;
        }
    }
}
