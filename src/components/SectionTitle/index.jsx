import React from 'react';

const SectionTitle = (props) => {

    const { navSelected } = props;

    // get section title based on navSelected
    const title = navSelected.charAt(0).toUpperCase() + navSelected.slice(1);

    // array of elements with different animations (flicker)
    const elements = [
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing flicker-1">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing flicker-2">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing flicker-3">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing flicker-4">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 sign">
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 text-center">
                    <h2 id={title} className="p-5 mb-6 section-title glowing">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    ];
    // get random index from array (each has different flicker animation)
    const randomStyledTitle = elements[Math.floor(Math.random() * 7)];
    
    // return a section title element with a random flicker animation
    return (
        randomStyledTitle
    )
}

export default SectionTitle;