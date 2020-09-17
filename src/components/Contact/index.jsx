import React from 'react';
import SectionTitle from '../SectionTitle';
import ContactForm from './ContactForm';

function Contact (props) {

    const { navSelected } = props;

    return(
        <section className="container-fluid fill-screen bottom-border">
            <SectionTitle
            navSelected={navSelected} /> 
            <div className="row justify-content-center pt-5">
                <ContactForm />
            </div>
            </section>
    )
}

export default Contact;