import React, { useState } from 'react';
import projects from '../../assets/js/projects';
import Project from '../Project';
import CardColumns from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import SectionTitle from '../SectionTitle';
import Carousel from '../Home/Carousel';
    
function ProjectsPage ({navSelected}) {

    const [viewToggle, setViewToggle] = useState(false);

    return(
        <section className="container-fluid fill-screen bottom-border">
            <SectionTitle
            navSelected={navSelected} />
            <Button variant="dark" className="ml-5 mt-5" onClick={()=> {setViewToggle(!viewToggle)}} >Toggle View</Button>
            <div className="row justify-content-center pt-5 pb-5">
                {viewToggle ? (
                    <CardColumns>
                    {projects.map((project) => (
                        <Project key={project.name} project={project} />
                        ))}
                </CardColumns>
                ) : (
                    <div className="col-12 col-sm-8 col-lg-6" >
                    <Carousel projects={projects} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsPage;