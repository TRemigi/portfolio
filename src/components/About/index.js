import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SectionTitle from '../SectionTitle';

function About (props) {

    const { navSelected } = props;

    return(
        <section className="container-fluid fill-screen bottom-border about">
            <SectionTitle
            navSelected={navSelected} />
            <div className="row justify-content-center pt-5">
                <div className="col-12 col-sm-7 col-lg-4">
                    <Card className="p-2 mb-3" bg="secondary" text="light">
                        <Card.Img  src={require('../../assets/images/tay.jpg')} alt="Taylor's portrait" />
                        <Card.Body>
                            <Card.Title>Taylor Remigi</Card.Title>
                                <Card.Text>
                                    is a full-stack web developer adept at learning new skills with a focus on creating beautiful and human friendly experiences. 
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About;