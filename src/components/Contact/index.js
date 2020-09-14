import React from 'react';
import contacts from '../../assets/js/contact';
import SectionTitle from '../SectionTitle/SectionTitle';

function Contact (props) {

    const { navSelected } = props;

    return(
        <section className="container-fluid fill-screen bottom-border">
            <SectionTitle
            navSelected={navSelected} /> 
            <div className="row justify-content-center pt-5">
                {contacts.map((item) => (
                    <div className="col-12 col-md-3 m-2 no-glow-neon job-card" key={item.name}>
                        <div className="card text-center contact-card text-white bg-secondary mb-3">
                            <img className="card-img-top pt-4" src={require(`../../assets/images/icons/${item.icon}`)} alt={item.name} />
                            <div className="card-body text-align-center pb-2">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-dark no-glow-neon">{item.name}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </section>
    )
}

export default Contact;