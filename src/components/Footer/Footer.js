import React from 'react'

const Footer = ({footerData}) => {
    const {section1,section2,section3} = footerData;
    const {title,address1,address2} = section1;
    const {facebook,twitter,linkedin,dribbble} = section2;
    const {description} = section3;
    return (
        <React.Fragment>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">
                                {
                                    title
                                }
                            </h4>
                            <p className="lead mb-0">
                                {
                                    address1
                                }
                            <br/>{address2}</p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">{section2.title}</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href={facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href={twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href={linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href={dribbble} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-fw fa-dribbble"></i>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">{section3.title}</h4>
                            <p className="lead mb-0">
                                {
                                    description
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="scroll-to-top d-lg-none position-fixed ">
                <a
                    className="js-scroll-trigger d-block text-center text-white rounded"
                    href="#page-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
            </div>
            <div className="scroll-to-top d-lg-none position-fixed ">
              <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                <i className="fa fa-chevron-up"></i>
              </a>
            </div>
        </React.Fragment>
    )
}

export default Footer;
