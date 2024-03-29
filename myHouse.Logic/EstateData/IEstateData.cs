﻿using System;
using System.Collections.Generic;
using myHouse.Models;

namespace myHouse.Logic.EstateData
{
    public interface IEstateData
    {
        List<Estate> GetEstates();

        Estate GetEstate(Guid id);

        Estate AddEstate(Estate estate);

        void DeleteEstate(Estate estate);

        Estate EditEstate(Estate estate);
    }
}
