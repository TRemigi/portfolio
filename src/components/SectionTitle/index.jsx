import React from 'react';

const SectionTitle = ({title}) => {

    // array of elements with different animations (flicker)
    const elements = [
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing flicker-1">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing flicker-2">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing flicker-3">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing flicker-4">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing">
                        {title}
                    </h2>
                </div>
            </div>
        </div>,
        <div className="container-fluid mt-5 mb-5">
            <div className="row" style={{height: "8vh"}}></div>
            <div className="row justify-content-start align-items-center">
                <div className="col-1 sign">
                </div>
                <div className="col-8 col-sm-6 col-md-4 pl-0 pr-0 mb-4 text-center">
                    <h2 id={title} className="p-3 section-title glowing">
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