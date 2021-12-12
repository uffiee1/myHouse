import Banner from "../components/Search"
import EstateList from "../components/estate/EstateList"
import React from 'react'
import RecentEstateList from "../components/RecentEstateList"

// import CarouselFeatured from "../components/CarouselFeatured"



// import RealEstateList from "./RealEstateList"

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <EstateList />
            <RecentEstateList />
        </React.Fragment>
    )
}

export default Home
