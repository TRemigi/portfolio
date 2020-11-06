import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faChrome } from '@fortawesome/free-brands-svg-icons';

function Project({project}) {


    return (
        // loop through projects passed in props and create cards
        <div key={project.name} className="col-12 col-md-8 col-lg-5 m-5 p-0 card-shadow">
            <Card text="light" className="p-2 border-0 darker-card">
                <Card.Img src={require(`../../assets/images/${project.image}`)} alt={project.name} />
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
        </div>
    )
}

export default Project;