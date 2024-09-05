import React from 'react'
import foodimg from "../../public/food web logo.png"
import aidetectimg from "../../public/image-detection.jpg"
import obyswebimg from "../../public/obys agency.jpeg"
function Projects() {
    const ProjctItems = [
        {
            id:1,
            projectLogo: foodimg,
            projectName: "Food Ordering website",
            projectDiscpt: "The online food ordering system brings everything to one place, from efficient web & mobile app ordering and delivery to POS and inventory."
        },
        {
            id:2,
            projectLogo: aidetectimg,
            projectName: "AI Object Detection System",
            projectDiscpt: "It is an instance of artificial intelligence that consists of training computers to see as humans do, specifically by recognizing and classifying objects according to semantic categories."

        },
        { 
             id:3,
            projectLogo: obyswebimg,
            projectName: "Obys Agency Clone",
            projectDiscpt: "Obys Agency is famous for their animated websites."
        },
    ]
  return (
    <div
    name="Projects"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className="text-3xl font-bold mb-5">Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 my-3'>
               {
                ProjctItems.map(({id, projectLogo, projectName,projectDiscpt}) => (
                    <div className='md:w-[300px] md:[300px] w-80 ml-9 md:ml-0 border-[2px] rounded-lg p-1 shadow-lg cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={projectLogo} className='w-[400px] h-[150px] p-1 rounded-lg border-[2px]' alt="" />
                        <div>
                            <div className='px-2 font-bold text-xl mb-2 mt-1'>{projectName}</div>
                            <p className='px-2 font-semibold'>{projectDiscpt}</p>
                        </div>
                        <div className='px-6 py-4 space-x-3 justify-around'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Link</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded' >Source code</button>
                        </div>
                    </div>
                ))}
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default Projects;
