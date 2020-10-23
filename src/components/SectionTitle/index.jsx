import React from "react";

const SectionTitle = ({ title, side }) => {
  // array of flicker animations
  const flickers = [`flicker-1`, `flicker-2`, `flicker-3`, "flicker-4"];
  
  const flickerHandler = () => {
      // get random index from array (each has different flicker animation)
    let randomFlicker = flickers[Math.floor(Math.random() * 4)];
      
    return `p-3 section-title glowing ${randomFlicker}`
  };

  const signHandler = () => {
    if (side === `left`) {

      return (
        <div className="mt-5 mb-5">
          <div className="row" style={{ height: "8vh" }}></div>
          <div
            className='row justify-content-end'
          >
            <div className="col-8 col-sm-6 col-md-4 mb-4 pr-0 text-center">
              <h2
                className={flickerHandler()}
              >
                {title}
              </h2>
            </div>
            <div className="col-3 col-sm-5 col-md-7 mt-4 sign"></div>
          </div>
        </div>
      );

    } else if (side === `right`) {

      return (
        <div className="mt-5 mb-5">
          <div className="row" style={{ height: "8vh" }}></div>
          <div
            className='row justify-content-start'
          >
                <div className="col-3 col-sm-5 col-md-7 mt-4 sign"></div>
            <div className="col-8 col-sm-6 col-md-4 mb-4 pl-0 text-center">
              <h2
                className={flickerHandler()}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>
      );

    }
  };

  // return a section title element with a random flicker animation
  return(
      <>
      {signHandler()}
      </>
  );
};

export default SectionTitle;
