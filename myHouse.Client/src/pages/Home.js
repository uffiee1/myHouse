import Banner from "../components/Banner"
import CarouselFeatured from "../components/CarouselFeatured"
import React from 'react'
import RealEstateList from "./RealEstateList"

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <RealEstateList />
            <CarouselFeatured />
        </React.Fragment>
    )
}

export default Home
