import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">2215 John Daniel Drive
                                <br/>Clark, MO 65243</p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#nourl" onClick={e => e.preventDefault()}>
                                <i className="fab fa-fw fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#nourl" onClick={e => e.preventDefault()}>
                                <i className="fab fa-fw fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#nourl" onClick={e => e.preventDefault()}>
                                <i className="fab fa-fw fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#nourl" onClick={e => e.preventDefault()}>
                                <i className="fab fa-fw fa-dribbble"></i>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://startbootstrap.com" onClick={e => e.preventDefault()}>Start Bootstrap</a>.</p>
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
