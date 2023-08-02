import React from 'react'

function Featured() {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center  mb-4" style={{ padding: '30px', border: '1px solid #edf1ff' }}>
                        <h1 className="fa fa-check  m-0 me-3" style={{ color: '#C98860' }}></h1>
                        <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center  mb-4" style={{ padding: '30px', border: '1px solid #edf1ff' }}>
                        <h1 className="fa fa-shipping-fast  m-0 me-3" style={{ color: '#C98860' }}></h1>
                        <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center  mb-4" style={{ padding: '30px', border: '1px solid #edf1ff' }}>
                        <h1 className="fas fa-exchange-alt  m-0 me-3" style={{ color: '#C98860' }}></h1>
                        <h5 className="font-weight-semi-bold m-0">15-Day Return</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="d-flex align-items-center  mb-4" style={{ padding: '30px', border: '1px solid #edf1ff' }}>
                        <h1 className="fa fa-phone-volume  m-0 me-3" style={{ color: '#C98860' }}></h1>
                        <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
