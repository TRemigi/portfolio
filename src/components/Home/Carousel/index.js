import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projects from '../../../assets/js/projects';


function CarouselComponent () {

    return (
        <Carousel>
            {projects.map((item) => (
                <Carousel.Item key={item.name}>
                    <img
                    className="d-block w-100"
                    src={require(`../../../assets/images/${item.image}`)}
                    alt={item.name}
                />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.tools}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselComponent;