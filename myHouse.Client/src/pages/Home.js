import Banner from "../components/Search"
import EstateList from "../components/estatee/EstateList"
import React from 'react'

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <EstateList />
        </React.Fragment>
    )
}

export default Home
