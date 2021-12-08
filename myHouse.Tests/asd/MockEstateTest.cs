using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myHouse.Logic.EstateData;
using myHouse.Models;
using Xunit;

namespace myHouse.UnitTests.asd
{
    public class MockEstateTest
    {
        private MockEstateData _data = null;

        public MockEstateTest()
        {
            if (_data == null)
            {
                _data = new MockEstateData();
            }
        }
        //
        // [Fact]
        // public MockEstateData AddEstate()
        // {
        //     return();
        // }

        [Fact]
        public void DeleteEstate()
        {

        }

        // [Fact]
        // public MockEstateData EditEstate(Estate estate)
        // {
        //
        // }
    }
}
