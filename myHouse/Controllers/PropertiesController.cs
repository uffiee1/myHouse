using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myHouse.Logic.PropertyData;
using myHouse.Models;

namespace myHouse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {
        private IPropertyData _propertyData;

        public PropertiesController(IPropertyData propertyData)
        {
            _propertyData = propertyData;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetProperties()
        {
            return Ok(_propertyData.GetProperties());
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetProperty(Guid id)
        {
            var property = _propertyData.GetProperty(id);

            if (property != null)
            {
                return Ok(_propertyData.GetProperty(id));
            }

            return NotFound($"Property with id: {id} was not Found");
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult GetProperty(Property property)
        {
            _propertyData.AddProperty(property);
            return Created(
                HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + property.Id, property);
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult DeleteProperty(Guid id)
        {
            var property = _propertyData.GetProperty(id);

            if (property != null)
            {
                _propertyData.DeleteProperty(property);
                return Ok();
            }

            return NotFound($"Property with id: {id} was not Found");
        }

        [HttpPatch]
        [Route("api/[controller]/{id}")]
        public IActionResult EditProperty(Guid id, Property property)
        {
            var existProperty = _propertyData.GetProperty(id);

            if (existProperty != null)
            {
                property.Id = existProperty.Id;
                _propertyData.EdiProperty(property);
            }

            return Ok(property);
        }
    }
}
