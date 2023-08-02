import React from 'react';
import luminaire from '../images/Categories/luminaire.jpg'
import mobilier from '../images/Categories/mobilier.jpg'
import decoration from '../images/Categories/decoration.jpg'
import rangement from '../images/Categories/rangement.jpg'

function Categories() {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3" style={{ margin: 'auto' }}>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="card" >
                        <img src={luminaire} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center" >Luminaire</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="card" >
                        <img src={mobilier} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center" >Mobilier</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="card" >
                        <img src={decoration} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center" >Decoration</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="card" >
                        <img src={rangement} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center" >Rangement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
