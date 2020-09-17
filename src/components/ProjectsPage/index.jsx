import React from 'react';
import projects from '../../assets/js/projects';
import Project from '../Project';
import CardColumns from 'react-bootstrap/CardGroup';
import SectionTitle from '../SectionTitle';
    
function ProjectsPage (props) {

const { navSelected } = props;

    return(
        <section className="container-fluid fill-screen bottom-border">
            <SectionTitle
            navSelected={navSelected} />
            <div className="row justify-content-center pt-5 pb-5">
                <CardColumns>
                    {projects.map((project) => (
                        <Project key={project.name} project={project} />
                    ))}
                </CardColumns>
            </div>
        </section>
    )
}

export default ProjectsPage;