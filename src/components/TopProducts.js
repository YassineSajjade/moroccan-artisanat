import React from 'react';
import './css/TopProducts.css';
import Slider from "react-slick";
import slider1 from '../images/TopProducts/tp1.jpg'
import slider2 from '../images/TopProducts/tp2.jpg'
import slider3 from '../images/TopProducts/tp3.jpg'
import slider4 from '../images/TopProducts/tp4.jpg'
import slider5 from '../images/TopProducts/tp5.jpg'
import slider6 from '../images/TopProducts/tp6.jpg'


function TopProducts() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [slider1, slider2, slider3, slider4, slider5, slider6]
    return (
        <div className='container-fluid pt-5'>
            <h2 className='m-5 text-center' style={{ color: '#C98860' }}> Top Products</h2>
            <Slider {...settings}>
                {images.map((image, index) =>
                    <div key={index} className='test'>
                        <img src={image} alt='' style={{height: '200px', width: '80%'}}/>
                    </div>
                )}
            </Slider>

        </div>
    )
}

export default TopProducts
