import React from "react";
import Glitch from "../glitch";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section id="home" className="container-fluid fill-screen">
      <div className="row justify-content-center align-items-center jumbo">
        <div className="col-12 pb-0 text-center typewriter-container">
          <Typewriter
            options={{
              strings: [
                "fast-paced",
                "creative",
                "test-driven",
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
          <h1>Full Stack Web Development</h1>
        </div>
      </div>
    </section>
  );
}
export default Home;
