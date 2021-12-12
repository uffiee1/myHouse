import React, { Component } from "react";

import RecentEstateItem from "./RecentEstateItem"
import Slider from "react-slick";
import Title from "./Title"

export default class RecentEstateList extends Component {
    render() {
        const title = {
            text: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ame"
        }
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        return (
            <section className="section-best-estate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <RecentEstateItem estateState="For Rent" />
                                <RecentEstateItem estateState="For Sale" />
                                <RecentEstateItem estateState="For Rent" />
                                <RecentEstateItem estateState="For Rent" />
                                <RecentEstateItem estateState="For Sale" />
                                <RecentEstateItem estateState="For Rent" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}