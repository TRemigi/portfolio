import React from 'react';
import Card from 'react-bootstrap/Card';
import SectionTitle from '../SectionTitle';

function About () {

    return(
        <section id="about" className="container-fluid fill-screen about">
            <SectionTitle
                title="About"
                side="right"
            />
            <div className="row justify-content-center pt-5 pb-5">
                <div className="col-12 col-sm-8 col-lg-4 about-img">
                    <img style={{height: "100%", width: "100%"}} src={require('../../assets/images/portrait.jpg')} alt="Taylor's portrait" />
                </div>
                <div className="col-12 col-sm-8 col-lg-8 d-flex align-items-center">
                    <Card className="p-1 mb-3" bg="dark" text="light">
                        <Card.Body>
                            <Card.Title>Taylor Remigi</Card.Title>
                                <Card.Text>
                                is a full stack web developer harnessing a love for creating and problem solving to deliver memorable user experiences. Recent recipient of formal recognition for workplace excellence while simultaneously achieving top-in-class grades to earn a certificate in full stack web development from the University of Utah, he has demonstrated a voracious appetite for learning and utilizing new skills including various languages and frameworks such as HTML5, CSS3, JavaScript, React.js, Node.js, MySQL, MongoDB, and many more. Emphasizing strong communication and self-accountable collaboration, led a small team of remote developers through the successful agile development of an enterprise-level progressive web application utilizing the MERN stack in three weeks. Ready and eager to contribute creativity and problem solving skills to a team that is dedicated to the continued growth and learning of all its members.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About;