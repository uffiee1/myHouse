using System;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using myHouse.DAL;
using myHouse.Models;
using Xunit;

namespace myHouse.UnitTests
{
    public class DBTests
    {
        var context = new AppDbContext(AppContext);
        public static DbContextOptions<AppDbContext> AppContext { get; set; }

        DummyDataDBInitializer db = new DummyDataDBInitializer();
        db.Seed(context);

        repository = new PostRepository(context);

        // [Fact]
        // public void Create_Valid_ReturnsTrue()
        // {
        //     // Arrange
        //     var model = new Estate();
        //
        //     var options = new DbContextOptionsBuilder<AppDbContext>()
        //         .EnableSensitiveDataLogging()
        //         .EnableDetailedErrors()
        //         .Options;
        //
        //     var context = new AppDbContext(options);
        //
        //     // Act 
        //     var result = context.Estate.Add(model);
        //
        //     // Assert
        //     Assert.True(false);
        // }
    }
}
