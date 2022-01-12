using System;
using Microsoft.AspNetCore.Mvc;
using myHouse.Logic.EstateData;
using myHouse.Models;

namespace myHouse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstateController : ControllerBase
    {
        private IEstateData _estateData;

        public EstateController(IEstateData estateData)
        {
            _estateData = estateData;
        }

        [HttpGet]
        public IActionResult GetEstates()
        {
            return Ok(_estateData.GetEstates());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetEstate(Guid id)
        {
            var estate = _estateData.GetEstate(id);

            if (estate != null)
            {
                return Ok(_estateData.GetEstate(id));
            }

            return NotFound($"Estate with id: {id} was not Found");
        }

        // [Authorize]
        [HttpPost]
        public IActionResult GetEstate(Estate estate)
        {
            _estateData.AddEstate(estate);
            return Created(
                HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + estate.Id, estate);
        }

        // [Authorize]
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteEstate(Guid id)
        {
            var estate = _estateData.GetEstate(id);

            if (estate != null)
            {
                _estateData.DeleteEstate(estate);
                return Ok();
            }

            return NotFound($"Estate with id: {id} was not Found");
        }

        // [Authorize]
        [HttpPatch]
        [Route("{id}")]
        public IActionResult EditEstate(Guid id, Estate estate)
        {
            var existEstate = _estateData.GetEstate(id);

            if (existEstate != null)
            {
                estate.Id = existEstate.Id;
                _estateData.EditEstate(estate);
            }

            return Ok(estate);
        }
    }
}
