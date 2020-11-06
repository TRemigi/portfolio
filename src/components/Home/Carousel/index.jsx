import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faChrome } from '@fortawesome/free-brands-svg-icons';


function CarouselComponent ({projects}) {

    return (
        <Carousel indicators={false} className="border-0 card-shadow">
            {projects.map((project) => (
                <Carousel.Item key={project.name}>
                <Card className="p-2 mb-0 border-0 darker-card" text="light">
                <Card.Img src={require(`../../../assets/images/${project.image}`)} alt={project.name} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text className="m-2">
                        {project.tools}
                    </Card.Text>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                <Button className="btn-shadow m-3" href={project.githubLink} target="_blank" rel="noreferrer" variant="dark"><span><FontAwesomeIcon icon={faGithubAlt} size="2x" /></span></Button>
                    <Button className="btn-shadow m-3" href={project.deployLink} target="_blank" rel="noreferrer" variant="dark"><span><FontAwesomeIcon icon={faChrome} size="2x" /></span></Button>
                </ButtonGroup>
            </Card>
            
            </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselComponent;