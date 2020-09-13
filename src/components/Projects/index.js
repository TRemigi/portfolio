import React from 'react';
import projects from '../../assets/js/projects';

function Projects () {

    return(
        <div className="container fill-screen bottom-border">
            <div className="row justify-content-center">
                <div className="col-6 pt-2 text-center">
                    <h2 id="contact" className="p-5 mt-4 mb-6 neon glowing">
                        Projects
                    </h2>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                {projects.map((item) => (
                    
                    <div key={item.name} className="col-12 col-md-6 col-lg-3 m-1 project-card">
                        <div className="subtitle">
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    )
}

export default Projects;