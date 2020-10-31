import React from "react";
import Glitch from "../glitch";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section id="home" className="container-fluid fill-screen">
      <div className="row justify-content-center align-items-center jumbo">
        <div className="col-12 col-lg-8 col-xlg-6 mt-5 text-center">
          <Typewriter
            options={{
              strings: [
                "creative",
                "efficient",
                "user-friendly",
                "agile",
                "memorable",
                "performant",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <Glitch text={"Full Stack Web Development"} />
        </div>
      </div>
    </section>
  );
}
export default Home;
