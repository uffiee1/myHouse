import ImageGallery from 'react-image-gallery';
import React from "react";

const EstateDetail = () => {
    const images = [
        {
            original: '/img/product1.jpeg',
            thumbnail: '/img/product1.jpeg',
        },
        {
            original: '/img/banner.jpg',
            thumbnail: '/img/banner.jpg',
        },
        {
            original: '/img/product2.jpeg',
            thumbnail: '/img/product2.jpeg',
        },
    ];

    return (
        <div className="estate-detail">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">DETAIL</h1>
                            <h2 className="page-description">Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fd-top estate-detail-content">
                            <div>
                                <h3 className="estate-detail-title">Lorem ipsum dolor sit amet.</h3>
                                <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                                    Lorem ipsum dolor sit amet</p>
                            </div>
                            <div>
                                <span className="fd-price">$650</span>
                            </div>
                        </div>
                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
                                    <h4>Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Property Details</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Kitchen: </span>
                                            <span>1</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>All Rooms: </span>
                                            <span>5</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Kitchen:  </span>
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Kitchen: </span>
                                            <span>1</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>All Rooms: </span>
                                            <span>5</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Kitchen:  </span>
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Kitchen: </span>
                                            <span>1</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>All Rooms: </span>
                                            <span>5</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Kitchen:  </span>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item fd-features">
                                    <h4>Features</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check"></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check"></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Lorem Ipsum</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item">
                                    <h4>Maps</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                </div>
                                <div className="fd-sidebar-item">
                                    <h4>Category</h4>
                                    <ul className="category-ul">
                                        <li>Category 1</li>
                                        <li>Category 2</li>
                                        <li>Category 3</li>
                                        <li>Category 4</li>
                                        <li>Category 5</li>
                                    </ul>
                                </div>
                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateDetail