import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionTitle from '../SectionTitle';
import ContactForm from './ContactForm';

function Contact (props) {

    const { navSelected } = props;

    return(
        <section id="contact" className="container-fluid bottom-border">
            <SectionTitle
            title="Contact" /> 
            <div className="row justify-content-center align-items-center" style={{color: "white"}}>
                <div className="col-12">
                    <h2>Contact</h2>
                </div>
                <div className="col-12 col-md-5 text-center">
                    <h3>Send me an email:</h3><a href="mailto:tayremigi@gmail.com">tayremigi@gmail.com</a>
                </div>
                <div className="col-12 col-md-5 text-center">
                   <h3>Call me:</h3><a href="tel:+13854248121">(385)424-8121</a>
                </div>
                {/* <ContactForm /> */}
            </div>
            </section>
    )
}

export default Contact;