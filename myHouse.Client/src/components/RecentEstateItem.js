import { Link } from "react-router-dom"

const RecentEstateItem = ({ estateState }) => {
    return (
        <div className="recent-estate">
            <div className="recent-estate-item">
                <div className="recent-estate-img-area">
                    <img className="recent-estate-img" src="/img/product1.jpeg" alt="estate" />
                    <div className={`recent-estate-state ${estateState === "For Rent" ? "bg-green" : "bg-red"}`}>{estateState}</div>
                </div>
                <div className="recent-estate-content">
                    <h4><Link to="/">Lorem Ipsum</Link></h4>
                    <span><Link to="/">Lorem Ipsum</Link></span>
                </div>
                <div className="recent-estate-features">
                    <div className="d-flex">
                        <div className="recent-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>3 Beds</span>
                        </div>
                        <div className="recent-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>2 Bathrooms</span>
                        </div>
                    </div>
                    <h5 className="recent-estate-price">€34050</h5>
                </div>
            </div>
        </div>
    )
}

export default RecentEstateItem