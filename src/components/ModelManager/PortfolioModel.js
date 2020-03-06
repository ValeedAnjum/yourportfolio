import React from 'react'

const PortfolioModel = ({Payload,hideDetailItem}) => {
    // const {image,name,des} = Payload;
    const hideDetails = () => {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('modal-open');
        hideDetailItem();
    }
    return (
        <React.Fragment>
            <div
            className="portfolio-modal modal fade show"
            id="portfolioModal1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="portfolioModal2Label"
            style={{
            'display': 'block',
            'paddingRight': '17px'
        }}
            aria-modal="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" onClick={hideDetails}></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="img/portfolio/cake.png" alt=""/>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
                                        inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
                                        consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal" onClick={hideDetails}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </React.Fragment>
    )
}

export default PortfolioModel
