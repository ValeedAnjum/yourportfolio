import React from 'react'

const About = ({aboutData,id}) => {
    const {AboutTitle,AboutMe1Sec,AboutMe2Sec,ButtonName,ButtonIconFontAwesome,ButtonSite} = aboutData;
    return (
        <section className="page-section bg-primary text-white mb-0" id={id}>
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">{AboutTitle}</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="lead">
                          {
                            AboutMe1Sec
                          }
                        </p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">
                          {
                            AboutMe2Sec
                          }
                        </p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <a
                        className="btn btn-xl btn-outline-light"
                        href={ButtonSite}>
                        <i className={ButtonIconFontAwesome}></i>
                        {ButtonName}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
