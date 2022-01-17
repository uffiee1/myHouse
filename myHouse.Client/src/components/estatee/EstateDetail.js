import ImageGallery from 'react-image-gallery';
import React from 'react';

const EstateDetail = () => {



    const images = [
        {
            original: '/img/product1.jpeg',
            thumbnail: '/img/product1.jpeg',
        }
    ];

    return (
        <div className="estate-detail">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fd-top estate-detail-content">
                            <div>
                                <h3 className="estate-detail-title">Donauring 1</h3>
                                <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                                    Veghel</p>
                            </div>
                            <div>
                                <span className="fd-price">199000€</span>
                            </div>
                        </div>
                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fd-item">
                                    <h4>Description</h4>
                                    <p>Huis</p>
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Property Details</h4>
                                </div>

                                <div className="fd-item">
                                    <h4>Maps</h4>

                                    <frame src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=nl&amp;q=Donauring%201+(Huis%201)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="450" loading="lazy"></frame>

                                </div>

                                <div className="fd-item">
                                    <h4>Make an Appointment</h4>
                                    <form class="main-form">
                                        <div class="row mt-5 ">
                                            <div class="col-12 col-sm-6 py-2 wow fadeInLeft">
                                                <input type="text" class="form-control" placeholder="Full name" />
                                            </div>
                                            <div class="col-12 col-sm-6 py-2 wow fadeInRight">
                                                <input type="text" class="form-control" placeholder="Email address.." />
                                            </div>
                                            <div class="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms">
                                                <input type="date" class="form-control" />
                                            </div>
                                            <div class="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
                                                <select name="departement" id="departement" class="custom-select">
                                                    <option value="general">How many people will attend? </option>
                                                    <option value="general">1 </option>
                                                    <option value="general">2 </option>
                                                    <option value="general">3 </option>
                                                    <option value="general">4 </option>
                                                </select>
                                            </div>
                                            <div class="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                                <input type="number" class="form-control" placeholder="Phone" />
                                            </div>
                                            <div class="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                                <textarea name="message" id="message" class="form-control" rows="6" placeholder="Enter message.."></textarea>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary mt-3 wow zoomIn">Submit Request</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EstateDetail;