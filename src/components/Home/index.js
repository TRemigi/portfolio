import React from 'react';
import CarouselComponent from './Carousel';

function Home () {

    return(
        <section>
        <div id="home" className="container-fluid fill-screen">
            <div className="row align-items-end justify-content-end jumbo">
                {/* <div className="col-10 col-md-8 back-dark">
                    <CarouselComponent />
                </div> */}
                <div className="col-12 col-lg-8 col-xlg-6">
                    <h2 className="subtitle text-right">Full Stack Web Development</h2>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Home;