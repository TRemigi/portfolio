import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Project({project}) {


    return (
        // loop through projects passed in props and create cards
        <div key={project.name} className="col-12 col-md-8 col-lg-6 m-5 p-0 card-shadow">
            <Card bg="dark" text="light" className="p-2 border-0">
                <Card.Img src={require(`../../assets/images/${project.image}`)} alt={project.name} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text className="m-2">
                        {project.tools}
                    </Card.Text>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                    <Button className="btn-shadow m-3" href={project.githubLink} target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../assets/images/icons/github.svg')} alt="github logo"></img></span></Button>
                    <Button className="btn-shadow m-3" href={project.deployLink} target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../assets/images/icons/chrome.svg')} alt="google chrome logo"></img></span></Button>
                </ButtonGroup>
            </Card>
        </div>
    )
}

export default Project;