import { Link } from "react-router-dom"
import React from "react"

const Navbar = (props) => {

    const logout = async () => {
        await fetch("http://localhost:8000/api/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
    }
    let menu;

    if (props.name === "") {
        menu = (
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Register</Link>
                </li>
            </ul>
        )
    } else
        menu = (
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/profile"}>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/login"} onClick={logout} >Logout</Link>
                </li>
            </ul>
        )


    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-home"></i>
                                <span className="ms-2">
                                    myHouse
                                </span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            {menu}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}

export default Navbar;