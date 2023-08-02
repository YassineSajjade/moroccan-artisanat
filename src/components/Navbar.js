import React from 'react';
import './css/Navbar.css';
import carousel1 from '../images/Carousel/carousel1.jpeg';
import carousel2 from '../images/Carousel/carousel2.jpeg';
import carousel3 from '../images/Carousel/carousel3.jpeg';

function Navbar() {
    return (
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">

                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100 rounded-0" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px', backgroundColor: '#C98860' }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse show navbar navbar-vertical align-items-start p-0  border-top-0 border-bottom-0" id="navbar-vertical" style={{ border: '1px solid #edf1ff' }} >
                        <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">Luminaires <i className="fa fa-angle-down float-end mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="" className="dropdown-item">Suspensions</a>
                                    <a href="" className="dropdown-item">Abat-jours</a>
                                    <a href="" className="dropdown-item">Applique pour lampes</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">Mobilier <i className="fa fa-angle-down float-end mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="" className="dropdown-item">Tabourets, Chaises et bancs</a>
                                </div>
                            </div>
                            <div className='nav-item'>
                                <a href="" className="nav-link">Decoration</a>
                            </div>
                            <div className='nav-item'>
                                <a href="" className="nav-link">Rangement</a>
                            </div>


                        </div>
                    </nav>
                </div>

                <div className="col-lg-9">

                    <nav className="navbar navbar-expand-lg navbar-light py-3  px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 font-weight-semi-bold" style={{ textAlign: 'center', fontSize: 'xx-large', fontWeight: 'lighter', color: '#C98860' }}>Moroccan Arts</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="shop.html" className="nav-item nav-link">About Us</a>
                                <a href="detail.html" className="nav-item nav-link">Shop</a>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <a href="" className="nav-item nav-link">Login</a>
                                <a href="" className="nav-item nav-link">Register</a>
                            </div>
                        </div>
                    </nav>

                    <div id="header-carousel" className="carousel slide" data-ride="">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{ height: '700px', backgroundImage: `url(${carousel1})`, backgroundSize: 'cover' }}>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ bottom: '20%' }}>
                                    <div className="p-3" style={{ maxWidth: '700px' }}>
                                        <h3 className="text-light text-uppercase font-weight-medium mb-3">Made With Care</h3>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4" style={{ fontSize: 'larger' }}>Care for tradition, care for material & care for artisans</h3>
                                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: '700px', backgroundImage: `url(${carousel2})`, backgroundSize: 'cover' }}>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ bottom: '20%' }}>
                                    <div className="p-3" style={{ maxWidth: '700px' }}>
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">A curation of Moroccan craftsmanship</h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4" style={{ fontSize: 'larger' }}>Reasonable Price</h3>
                                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: '700px', backgroundImage: `url(${carousel3})`, backgroundSize: 'cover' }}>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ bottom: '20%' }}>
                                    <div className="p-3" style={{ maxWidth: '700px' }}>
                                        <h5 className="text-light text-uppercase font-weight-medium mb-5">We have unearthed for you the best of 100% handmade Moroccan craftsmanship.</h5>
                                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                                <span className="carousel-control-prev-icon mb-n2"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                                <span className="carousel-control-next-icon mb-n2"></span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar
