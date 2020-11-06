import React from "react";

const SectionTitle = ({ title, side }) => {

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
                className="p-3 section-title glowing flicker-4"
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
                className="p-3 section-title glowing flicker-4"
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
