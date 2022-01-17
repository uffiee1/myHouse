import { Link } from "react-router-dom";

const EstateItem = ({ id }) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="estate" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Huis 1</span>
                        <span className="item-price">199000€</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Donauring 1</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Veghel </span>
                        </div>
                        <Link to={`/estate/${id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="estate" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Huis 2</span>
                        <span className="item-price">365000€</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Donauring 3</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Veghel </span>
                        </div>
                        <Link to={`/estate/${id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="estate" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Huis 3</span>
                        <span className="item-price">249000€</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Donauring 5</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Veghel </span>
                        </div>
                        <Link to={`/estate/${id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="estate" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Huis 4</span>
                        <span className="item-price">750€</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Donauring 7</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Veghel </span>
                        </div>
                        <Link to={`/estate/${id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="estate" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Huis 5</span>
                        <span className="item-price">225000€</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Donauring 9</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Veghel </span>
                        </div>
                        <Link to={`/estate/${id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="estate" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Huis 6</span>
                        <span className="item-price">1000€</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Donauring 11</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Veghel </span>
                        </div>
                        <Link to={`/estate/${id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateItem