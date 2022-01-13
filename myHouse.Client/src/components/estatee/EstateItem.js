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
                        <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                        <span className="item-price">$1000</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Lorem </span>
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