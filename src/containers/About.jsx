import React from "react";

function About() {
  return (
    <>
      <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Jatin, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-blue-700 font-semibold text-xl">Eduaction</h1>
        <p className="font-semibold">
          B.Tech in Computer Science and Engineering
        </p>
        <p> Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
        <p>CGPA: 7.5</p>
        <p>2020-2024</p>
        <br />
        <h1 className="text-blue-700 font-semibold text-xl">My Mission</h1>
        <p>My mission is to leverage my skills and creativity to deliver innovative IT solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</p>
      </div>
      <hr />
    </>
  );
}

export default About;
