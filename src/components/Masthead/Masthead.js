import React from 'react'

const Masthead = ({mastData}) => {
    const {MastheadTitle,Labels} = mastData;
    let labeles = "";
    for(let i = 0;i<Labels.length;i++){
        labeles += Labels[i].toUpperCase() + " - ";
    }
    let newLabels = labeles.slice(0,labeles.length-2).toLocaleLowerCase();
    return (
        <header className="masthead bg-primary text-white text-center" id="page-top">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="img/avataaars.svg" alt=""/>
                <h1 className="masthead-heading text-uppercase mb-0">{MastheadTitle}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0 text-capitalize">
                    {
                        newLabels
                    }
                </p>
            </div>
        </header>
    )
}

export default Masthead;
