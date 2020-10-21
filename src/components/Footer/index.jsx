import React from 'react';
import contacts from '../../assets/js/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    // find correct icon
    const iconChecker = (item) => {
        let icon = "";

        if (item.name === "GitHub") {
            icon = faGithubSquare;
        } else if (item.name === "LinkedIn") {
            icon = faLinkedin;
        } else {
            icon = faSpotify;
        }

        return icon;
    }

    return (
        <footer className="footer back-dark">
            <div className="container-fluid">
                
                <div id="contact" className="row justify-content-center align-items-center pt-4 mb-2" style={{color: "white"}}>
                    <div className="col-6 col-md-3 text-center">
                        <h6>Send me an email:</h6><a href="mailto:tayremigi@gmail.com">tayremigi@gmail.com</a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                        <h6>Call me:</h6><a href="tel:+13854248121">(385)424-8121</a>
                    </div>
                </div>
                <div className="row justify-content-center pt-4">
                    {contacts.map((item) => (
                        <div className="col-4 col-md-2 col-lg-1" key={item.name}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-dark no-glow-neon"><span><FontAwesomeIcon icon={iconChecker(item)} size="2x" /></span></a>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center pt-1">
                    <h3 className="p-4">Copyright © Taylor Remigi 2020</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer;