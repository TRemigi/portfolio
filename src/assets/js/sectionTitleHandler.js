import React from 'react';

const addTitle = (navSelected) => {
    const title = navSelected.charAt(0).toUpperCase() + navSelected.slice(1);
    const elements = [
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-1">                
            {title}
        </h2>,
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-2">                
            {title}
        </h2>,
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-3">                
            {title}
        </h2>,
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-4">                
            {title}
        </h2>,
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing">                
            {title}
        </h2>,
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing">                
            {title}
        </h2>,
        <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing">                
            {title}
        </h2>
    ];

    const randomStyledTitle = elements[Math.floor(Math.random() * 8)];
    console.log(randomStyledTitle);
    return (
        randomStyledTitle
    )
}

export default addTitle;