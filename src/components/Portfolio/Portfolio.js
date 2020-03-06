import React from 'react'
import {connect} from 'react-redux';
import PortfolioItem from './PortfolioItem';
import { openPortfolioModel } from '../../store/Actions/ModelActions';
const Portfolio = ({portfolioItems,detailItem}) => {
    const details = async Item =>  {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('modal-open');
        detailItem(Item);
        //document.getElementById('portfolioModal1').focus();
    }
    return (
            <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    {
                        portfolioItems.map((Item,Index) => {
                            return <PortfolioItem detailItem={() => details(Item)} key={Index} imgSrc={Item.image} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const mapState = state => {
    return {

    }
}
const mapDispatch = dispatch => {
    return {
        detailItem:item => dispatch(openPortfolioModel(item))
    }
}
export default connect(mapState,mapDispatch)(Portfolio);
