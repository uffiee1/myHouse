import { Link } from "react-router-dom";
import Title from "../components/Title"
import { Variables } from '../components/ApiUrls';
import axios from "axios";

const RealEstateList = () => {
    const title = {
        text: "Recent Toegevoegde Huizen  ",
        description: "Lorem ipsum dolor sit ame",
        titleName: "Huis 1"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} titleName={title.titleName} />
                <div className="row">
                    <div className="text-center col-lg-4 col-12 col-md-6 ">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                            </div>
                            <div className="item-description">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="item-title">Huis 1</span>
                                    <span className="item-price">1000 €</span>
                                </div>
                                <div className="item-icon d-flex alig-items-center justify-content-between">
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span> Lorem </span>
                                    </div>
                                    <Link to="/1" className="item-title">
                                        <button className="btn btn-detail">Bekijk meer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center col-lg-4 col-12 col-md-6 ">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                            </div>
                            <div className="item-description">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                    <span className="item-price">1000 €</span>
                                </div>
                                <div className="item-icon d-flex alig-items-center justify-content-between">
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span> Lorem </span>
                                    </div>
                                    <Link to="/2" className="item-title">
                                        <button className="btn btn-detail">Bekijk meer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 col-12 col-md-6 ">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                            </div>
                            <div className="item-description">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                    <span className="item-price">1000 €</span>
                                </div>
                                <div className="item-icon d-flex alig-items-center justify-content-between">
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span> Lorem </span>
                                    </div>
                                    <Link to="/3">
                                        <button className="btn btn-detail">Bekijk meer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 col-12 col-md-6">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                            </div>
                            <div className="item-description">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                    <span className="item-price">1000 €</span>
                                </div>
                                <div className="item-icon d-flex alig-items-center justify-content-between">
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span> Lorem </span>
                                    </div>
                                    <Link to="/3">
                                        <button className="btn btn-detail">Bekijk meer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 col-12 col-md-6">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                            </div>
                            <div className="item-description">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                    <span className="item-price">1000 €</span>
                                </div>
                                <div className="item-icon d-flex alig-items-center justify-content-between">
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span> Lorem </span>
                                    </div>
                                    <Link to="/3">
                                        <button className="btn btn-detail">Bekijk meer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 col-12 col-md-6">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                            </div>
                            <div className="item-description">
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                    <span className="item-price">1000 €</span>
                                </div>
                                <div className="item-icon d-flex alig-items-center justify-content-between">
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-check-circle"></i> <span> Lorem </span>
                                    </div>
                                    <Link to="/3">
                                        <button className="btn btn-detail">Bekijk meer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default RealEstateList;