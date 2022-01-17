using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using myHouse.Controllers;
using myHouse.Logic.EstateData;
using myHouse.Models;
using Xunit;

namespace myHouse.Tests
{
    public class EstateControllerTests
    {
        private readonly EstateController _controller;
        private readonly IEstateData _service;

        public EstateControllerTests()
        {
            _service = new MockEstateData();
            _controller = new EstateController(_service);
        }

        /// <summary>
        /// Get Estates.
        /// </summary>
        [Fact]
        public void Get_When_Called_ReturnsOkResult()
        {
            // Act
            var okResult = _controller.GetEstates();

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void Get_When_Called_ReturnsAll_Estates()
        {
            // Act
            var okResult = _controller.GetEstates() as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<Estate>>(okResult.Value);
            Assert.Equal(2, items.Count);
        }

        /// <summary>
        /// Estates GetById.
        /// </summary>
        [Fact]
        public void GetById_Unknown_Guid_Passed_Returns_NotFoundResult()
        {
            // Act
            var notFoundResult = _controller.GetEstate(Guid.NewGuid());

            // Assert
            Assert.IsType<NotFoundObjectResult>(notFoundResult);
        }

        [Fact]
        public void GetById_Existing_Guid_Passed_ReturnsOkResult()
        {
            // Arrange
            var testGuid = new Guid("8cfdea79-9794-4633-bd76-5b4376289a98");

            // Act
            var okResult = _controller.GetEstate(testGuid);

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetById_Existing_Guid_Passed_ReturnsRightItem()
        {
            // Arrange
            var testGuid = new Guid("8cfdea79-9794-4633-bd76-5b4376289a98");

            // Act
            var okResult = _controller.GetEstate(testGuid) as OkObjectResult;

            // Assert
            Assert.IsType<Estate>(okResult.Value);
            Assert.Equal(testGuid, (okResult.Value as Estate).Id);
        }

        /// <summary>
        /// Get Estates.
        /// </summary>
        [Fact]
        public void GetEstates_When_Called_ReturnsOkResult()
        {
            // Act
            var okResult = _controller.GetEstates();

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void Get_When_Called_Returns_AllEstates()
        {
            // Act
            var okResult = _controller.GetEstates() as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<Estate>>(okResult.Value);
            Assert.Equal(2, items.Count);
        }

        /// <summary>
        /// Delete Estate.
        /// </summary>
        [Fact]
        public void Remove_NotExisting_Guid_Passed_Returns_NotFoundResponse()
        {
            // Arrange
            var notExistingGuid = Guid.NewGuid();

            // Act
            var badResponse = _controller.DeleteEstate(notExistingGuid);

            // Assert
            Assert.IsType<NotFoundObjectResult>(badResponse);
        }

        [Fact]
        public void Remove_Existing_GuidPassed_Returns_NoContentResult()
        {
            // Arrange
            var existingGuid = new Guid("8cfdea79-9794-4633-bd76-5b4376289a90");

            // Act
            var noContentResponse = _controller.DeleteEstate(existingGuid);

            // Assert
            Assert.IsType<NotFoundObjectResult>(noContentResponse);
        }

        [Fact]
        public void Remove_Existing_Guid_Passed_Removes_Estate()
        {
            // Arrange
            var existingGuid = new Guid("8cfdea79-9794-4633-bd76-5b4376289a00");

            // Act
            var okResponse = _controller.DeleteEstate(existingGuid);

            // Assert
            Assert.Equal(1, _service.GetEstates().Count());
        }

        [Fact]
        public async void Get_CreateById_Return_NotFoundResult()
        {
            // Arrange
            var controller = new EstateController(_service);
            var testGuid = new Guid("8cfdea79-9794-4633-bd76-5b4376289a90");

            // Act
            var data = controller.GetEstate(testGuid);

            // Assert
            Assert.IsType<NotFoundObjectResult>(data);
        }
    }
}
