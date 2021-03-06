import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import banner from "../banner.jpg"

const Search = ({ item }) => {
    const [search, setSearch] = useState();
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");
    useEffect(() => {
        setSearch(["Huis1", "Huis2", "Huis3", "Huis4", "Huis5", "Huis6"])
    }, [])
    const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }
    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">Sorry, we konden het huis dat je zocht niet vinden...</div>
        }
        if (find.length > 0) {
            return <div className="find-search">
                {
                    find.map(item => {
                        return (
                            <Link to={`/estate/${item}`}>
                                <button>{item}</button>
                            </Link>
                        )
                    })
                }
            </div>
        }
    }
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"><strong> Zoek Huis</strong> </h2>
                                <div className="search-area">
                                    <input value={word} onChange={(e) => findSearch(e)} type="text" className="inp-search" placeholder="Zoek" />
                                    <button className="btn-search m-7">Meer gedetailleerd zoeken</button>
                                </div>
                                {findResult()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;