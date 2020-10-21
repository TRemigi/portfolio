import React from 'react';
import Card from 'react-bootstrap/Card';
import SectionTitle from '../SectionTitle';

function About (props) {

    const { navSelected } = props;

    return(
        <section id="about" className="container-fluid fill-screen bottom-border about">
            <SectionTitle
            title="About" />
            <div className="row justify-content-center pt-5">
            <div className="col-12 col-sm-8 col-lg-5">
                <img className="about-img" src={require('../../assets/images/tay.jpg')} alt="Taylor's portrait" />
            </div>
                <div className="col-12 col-sm-8 col-lg-5">
                    <Card className="p-2 mb-3" bg="secondary" text="light">
                        <Card.Body>
                            <Card.Title>Taylor Remigi</Card.Title>
                                <Card.Text>
                                Full stack web developer harnessing love for creating and problem solving to deliver memorable user experiences. Recent recipient of formal recognition for workplace excellence while simultaneously achieving top-in-class grades to earn a certificate in full stack web development from the University of Utah. Demonstrated a voracious appetite for learning and utilizing new skills including various languages and frameworks such as HTML5, CSS3, JavaScript, React.js, Node.js, MySQL, MongoDB, and many more. Emphasizing strong communication and self-accountable collaboration, led a small team of remote developers through the successful agile development of an enterprise-level progressive web application utilizing the MERN stack in just three weeks. Ready and eager to contribute creativity and problem solving skills to a team that is dedicated to the continued growth and learning of all its members.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About;