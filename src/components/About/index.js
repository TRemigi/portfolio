import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import addTitle from '../../assets/js/sectionTitleHandler';

function About (props) {

    const { navSelected } = props;

    return(
        <section className="container-fluid fill-screen bottom-border">
            <div className="row justify-content-center">
                <div className="col-6 pt-2 text-center align-items-center">
                    {addTitle(navSelected)}
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-4">
                    <Card className="p-2 mb-3" bg="secondary" text="light">
                        <Card.Img  src={require('../../assets/images/tay.jpg')} alt="Taylor's portrait" />
                        <Card.Body>
                            <Card.Title>Taylor Remigi</Card.Title>
                                <Card.Text>
                                    is a full-stack web developer adept at learning new skills with a focus on creating beautiful and human friendly experiences. 
                                </Card.Text>
                        </Card.Body>                            <ButtonGroup aria-label="Basic example">
                            <Button href="https://github.com/TRemigi" target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../assets/images/icons/github.svg')}></img></span></Button>
                            <Button href="https://www.linkedin.com/in/taylor-remigi-7178281a5/" target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../assets/images/icons/linkedin.svg')}></img></span></Button>
                        </ButtonGroup>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About;