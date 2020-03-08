import React from 'react'
import styled,{keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';

const Bounce = styled.div`animation:300ms ${keyframes`${fadeIn}`}`;

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
            style={{
            'display': 'block',
            'paddingRight': '17px'
        }}
            aria-modal="true">
            <div className="modal-dialog modal-xl" role="document">
                <Bounce>
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
            </Bounce>
            </div>
        </div>
        <div className="modal-backdrop fade show" id="modal-backdrop"></div>
        </React.Fragment>
    )
}

export default PortfolioModel
