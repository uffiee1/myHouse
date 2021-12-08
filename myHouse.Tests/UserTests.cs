using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mailjet.Client.Resources;
using myHouse.DAL;
using Xunit;

namespace myHouse.UnitTests
{
    public class UserTests
    {
        // [Fact]
        // public async Task Should_ReturnTrue_When_IsValid()
        // {
        //     var dbUserId = Guid.NewGuid();
        //     var dbUserDisplayName = "Display Name";
        //
        //     using (var dbContext = new AppDbContext();
        //     {
        //         dbContext.Users.Add(new User { Id = dbUserId, DisplayName = dbUserDisplayName });
        //         await dbContext.SaveChangesAsync();
        //     }
        //
        //     using (var dbContext = new ApplicationDbContext(dbContextOptions))
        //     {
        //         var userRules = new UserRules(dbContext);
        //         var userResult = await userRules.IsValidAsync(dbUserId);
        //         Assert.False(userResult);
        //     }
        // }
    }
}
