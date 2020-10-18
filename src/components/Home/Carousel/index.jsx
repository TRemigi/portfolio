import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Project from '../../Project';


function CarouselComponent ({projects}) {

    return (
        <Carousel>
            {projects.map((project) => (
                <Carousel.Item key={project.name}>
                <Card className="p-2 mb-3" bg="secondary" text="light">
                <Card.Img src={require(`../../../assets/images/${project.image}`)} alt={project.name} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text className="m-2">
                        {project.tools}
                    </Card.Text>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                    <Button href={project.githubLink} target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../../assets/images/icons/github.svg')}></img></span></Button>
                    <Button href={project.deployLink} target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../../assets/images/icons/chrome.svg')}></img></span></Button>
                </ButtonGroup>
            </Card>
            
            </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselComponent;