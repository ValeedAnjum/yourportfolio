import React from 'react'
import {combineValidators, isRequired} from 'revalidate';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Textinput from '../Comman/TextInput/TextInput';
import Textarea from '../Comman/TextArea/TextArea';
const validate = combineValidators({
    name: isRequired({message: 'name Is R'}),
    email: isRequired({message: 'Email Is R'}),
    phone: isRequired({message: "Phone No Is Required"}),
    message: isRequired({message: 'Message Should Not Be Empty'})
})
const Contact = (props) => {

    const submitVal = val => {
        console.log(val);
    }
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <h2
                    className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form
                            name="sentMessage"
                            id="contactForm"
                            noValidate="novalidate"
                            onSubmit={props.handleSubmit(submitVal)}>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <Field
                                        name="name"
                                        component={Textinput}
                                        className="form-control"
                                        placeholder="NAME"
                                        type="text"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <Field
                                        name="email"
                                        component={Textinput}
                                        className="form-control"
                                        placeholder="EMAIL"
                                        type="email"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <Field
                                        name="phone"
                                        component={Textinput}
                                        className="form-control"
                                        placeholder="PHONE"
                                        type="tel"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <Field
                                        name="message"
                                        component={Textarea}
                                        className="form-control"
                                        placeholder="MESSAGE"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-xl" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapState = state => {
    console.log(state.form);
    return {}
}
export default connect(mapState, null)(reduxForm({form: 'ContactForm', validate})((Contact)));
