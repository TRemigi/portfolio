import React from 'react';
import contacts from '../../assets/js/contact';
import ReactDOM from 'react-dom';
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