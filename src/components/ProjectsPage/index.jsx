import React, { useState } from 'react';
import projects from '../../assets/js/projects';
import Project from '../Project';
import CardColumns from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import SectionTitle from '../SectionTitle';
import Carousel from '../Home/Carousel';
    
function ProjectsPage () {

    const [viewToggle, setViewToggle] = useState(true);

    return(
        <section id="projects" className="container-fluid fill-screen">
            <SectionTitle
                title="Projects"
                side="left"
            />
            <div className="row justify-content-center">
                <div className={`${!viewToggle && "col-sm-8 col-lg-6"} col-12 ml-3 mt-5 mb-2"`}>
                    <Button className="btn-shadow border-0" variant="dark" onClick={()=> {setViewToggle(!viewToggle)}} >Toggle View</Button>
                </div>
                {viewToggle ? (
                    <>
                        {projects.map((project) => (
                            <Project key={project.name} project={project} />
                        ))}
                    </>
                ) : (
                    <div className="col-12 col-md-8 col-lg-6 m-5" >
                        <Carousel projects={projects} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsPage;