// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using myHouse.Controllers;
// using myHouse.Logic.EstateData;
// using Xunit;
//
// namespace myHouse.UnitTests
// {
//     public class EstateTests
//     {
//         #region Get By Id
//
//         [Fact]
//         public async void Task_GetPostById_Return_OkResult()
//         {
//             //Arrange
//             var controller = new EstateController(EstateData);
//             var estateId = 2;
//
//             //Act
//             var data = await controller.GetEstate(estateId);
//
//             //Assert
//             Assert.IsType<OkObjectResult>(data);
//         }
//
//         [Fact]
//         public async void Task_GetPostById_Return_NotFoundResult()
//         {
//             //Arrange
//             var controller = new PostController(repository);
//             var postId = 3;
//
//             //Act
//             var data = await controller.GetPost(postId);
//
//             //Assert
//             Assert.IsType<NotFoundResult>(data);
//         }
//
//         [Fact]
//         public async void Task_GetPostById_Return_BadRequestResult()
//         {
//             //Arrange
//             var controller = new PostController(repository);
//             int? postId = null;
//
//             //Act
//             var data = await controller.GetPost(postId);
//
//             //Assert
//             Assert.IsType<BadRequestResult>(data);
//         }
//
//         [Fact]
//         public async void Task_GetPostById_MatchResult()
//         {
//             //Arrange
//             var controller = new PostController(repository);
//             int? postId = 1;
//
//             //Act
//             var data = await controller.GetPost(postId);
//
//             //Assert
//             Assert.IsType<OkObjectResult>(data);
//
//             var okResult = data.Should().BeOfType<OkObjectResult>().Subject;
//             var post = okResult.Value.Should().BeAssignableTo<PostViewModel>().Subject;
//
//             Assert.Equal("Test Title 1", post.Title);
//             Assert.Equal("Test Description 1", post.Description);
//         }
//
//         #endregion
//     }
// }
