import React from 'react';
import projects from '../../assets/js/projects';

function Projects () {

    return(
        <div>
            {projects.map((project) => (
                <div key={project.name}>
                    <img src={require(`../../assets/images/${project.image}`)} />
                    <p>
                        {project.tools}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Projects;