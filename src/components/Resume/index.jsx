import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SectionTitle from '../SectionTitle';
    
function Resume () {

    const proficiencies = [
        'HTML',
        'CSS',
        'GIT',
        'Bootstrap',
        'Node.Js',
        'Express.js',
        'JavaScript',
        'jQuery',
        'React.js',
        'State',
        'Redux',
        'MySQL',
        'Object Relational Mapping',
        'NoSQL',
        'MongoDB',
        'GraphQL',
        'Mongoose',
        'Media Queries',
        'Model-View-Controller',
        'Progressive Web Applications',
        'APIs',
        'JSON',
        'REST',
        'AJAX',
        'GitHub',
        'Object-Oriented Programming',
        'Computer Science Fundamentals',
        'Writing Tests',
    ];

    return(
        <section id="resume" className="container-fluid fill-screen bottom-border">
            <SectionTitle
                title="Resume"
                side="left"
            />
            <div className="row justify-content-center pt-5 pb-0">   
                <div className="col-12 col-md-8 col-lg-6">
                    <Card className="p-2 mb-0 border-0 card-shadow" bg="dark" text="light">
                        <Card.Body>
                            <h3 className="text-center pb-3">Proficiencies</h3>
                                    <ul style={{listStyleType: "none"}} className="text-center">
                                        {proficiencies.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row justify-content-center pt-0 pb-3">
                <div className="col-12 col-md-8 col-lg-6">
                    <Button className=" mt-5 btn-shadow" style={{width: "100%"}} href="https://docs.google.com/document/d/1KR3lAhCoV_Q0ufdYCP92kJT-a-qsUJSTYKTN_MITpqE/edit?usp=sharing" target="_blank" rel="noreferrer" variant="dark">Download Resume</Button>
                </div>
            </div>
        </section>
    )
}

export default Resume;