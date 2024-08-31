import React from "react";
import htmllogo from "../../public/HTML-5.jpg";
import csslogo from "../../public/CSS-3.webp";
import javascptlogo from "../../public/javaScript-logo.svg";
import pythonlogo from "../../public/Python-logo.svg";
import javalogo from "../../public/Java-logo.svg";
import reactlogo from "../../public/React-logo.svg";
import nodelogo from "../../public/Node-JS-logo.svg";
function Skills() {
  const SkillsItems = [
    {
      id: 1,
      skillslogo: htmllogo,
      skillsName: "HTML",
    },
    {
      id: 2,
      skillslogo: csslogo,
      skillsName: "CSS",
    },
    {
      id: 3,
      skillslogo: javascptlogo,
      skillsName: "JavaScript",
    },
    {
      id: 4,
      skillslogo: pythonlogo,
      skillsName: "PYTHON",
    },
    {
      id: 5,
      skillslogo: javalogo,
      skillsName: "Core Java",
    },
    {
      id: 6,
      skillslogo: reactlogo,
      skillsName: "REACT",
    },
    {
      id: 7,
      skillslogo: nodelogo,
      skillsName: "NODE.JS",
    },
  ];
  return (
    <>
    <div 
    name="Skills"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills and Expertise</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {SkillsItems.map(({ id, skillslogo, skillsName }) => (
             <div
             className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
             key={id}
           >
              <img
                src={skillslogo}
               className="w-[150px] rounded-full"
                alt=""
              />
              <div>
                <div className="font-semibold">
                  {skillsName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr />
    </>
  );
}

export default Skills;
