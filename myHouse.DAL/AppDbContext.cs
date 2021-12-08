using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using myHouse.Models;
using myHouse.Models.Authentication;

namespace myHouse.DAL
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Property> Property { get; set; }

        public DbSet<Estate> Estate { get; set; }

        public DbSet<Status> Status { get; set; }

        // public DbSet<District> District { get; set; }

        // public DbSet<City> City { get; set; }

        // public DbSet<Street> Street { get; set; }

        // public DbSet<Models.Type> Type { get; set; }

        // public DbSet<Role> Role { get; set; }

        //public EstateUnitTestController()
        //{
        //    var context = new AppDbContext(dbContextOptions);
        //    DummyDataDBInitializer db = new DummyDataDBInitializer();
        //    db.Seed(context);

        //    repository = new PostRepository(context);

        //}
    }
}
