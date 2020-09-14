import React from 'react';
import projects from '../../assets/js/projects';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CardColumns from 'react-bootstrap/CardGroup';
import addTitle from '../../assets/js/sectionTitleHandler';
    
function Projects (props) {

const { navSelected } = props;

    return(
        <div className="container fill-screen bottom-border">
            <div className="row justify-content-center">
                <div className="col-6 pt-2 text-center">
                    {addTitle(navSelected)}
                </div>
            </div>
            <div className="row justify-content-center pt-5 pb-5">
                <CardColumns>
                    {projects.map((item) => (
                        <div key={item.name} className="col-12 col-md-6 col-lg-4 project-card">
                        <Card className="p-2 mb-3" bg="secondary" text="light">
                            <Card.Img src={require(`../../assets/images/${item.image}`)} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.tools}
                                    </Card.Text>
                            </Card.Body>
                            <ButtonGroup aria-label="Basic example">
                                <Button href={item.githubLink} target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../assets/images/icons/github.svg')}></img></span></Button>
                                <Button href={item.deployLink} target="_blank" rel="noreferrer" variant="dark"><span><img className="project-btn" src={require('../../assets/images/icons/chrome.svg')}></img></span></Button>
                            </ButtonGroup>
                        </Card>
                        </div>
                    ))}
                </CardColumns>
            </div>
        </div>
    )
}

export default Projects;