import React from 'react';
// import carousel for later use
// import CarouselComponent from './Carousel';

function Home () {

    return(
        <section>
        <div id="home" className="container-fluid fill-screen">
            <div className="row align-items-end justify-content-end jumbo">
                {/* insert carousel here (will be used later) */}
                <div className="col-12 col-lg-8 col-xlg-6">
                    <h2 className="subtitle text-right">Full Stack Web Development</h2>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Home;