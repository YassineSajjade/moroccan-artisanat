import React from 'react';
import './css/TopBar.css';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className="container-fluid">
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link  to='/' relative='path' className="text-decoration-none">
                        <h3 className="m-0  font-weight-semi-bold" style={{textAlign: 'center',fontSize: 'xx-large', fontWeight: 'lighter', color: '#C98860'}}>Moroccan Arts</h3>
                    </Link>
                </div>
                <div className="col-lg-6 col-6 ">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control rounded-0" placeholder="Search for products" style={{borderColor : '#edf1ff', color: '#1C1C1C'}}/>
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary" style={{padding: '0.7rem', borderRadius: 0, borderColor : '#edf1ff'}}>
                                        <i className="fa fa-search" style={{color: '#C98860'}}></i>
                                    </span>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-end">
                    <a href="" className="btn rounded-0 " style={{borderColor: '#edf1ff'}}>
                        <i className="fas fa-heart " style={{color: '#C98860'}}></i>
                        <span className="badge" style={{color: '#000'}}>0</span>
                    </a>
                    <a href="" className="btn rounded-0" style={{marginLeft: '3px', borderColor: '#edf1ff'}}>
                        <i className="fas fa-shopping-cart " style={{color: '#C98860'}}></i>
                        <span className="badge" style={{color: '#000'}}>0</span>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default TopBar
