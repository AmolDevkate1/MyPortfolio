import React from 'react'

import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import flyby from "../assets/portfolio/home.jpg";

const Portfolio = () => {

const portfolio = [
{
    id:1,
    src:flyby
},
{
    id:2,
    src:reactSmooth

},
{
    id:3,
    src:navbar

},
{
    id:4,
    src:reactSmooth

},
{
    id:5,
    src:installNode
}
]
    return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ' >
    
     <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full' >
          <div className='py-6'>
          <p className='text-4xl'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here </p>
           </div>

          
        <div className ="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        { 
        portfolio.map(({ id, src}) => (
        <div key={id}
         className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src}
             alt=""
            className="w-80 mx-auto rounded-md duration-200 hover:scale-105"/>
                
            <div className='flex items-center justify-center '>
            <button className='w-1/2 py-3 px-6 m-2 '>Demo</button>
            <button className='w-1/2 py-3 px-6 m-2 '>Code</button>
            </div>
            </div>
             
              ))
            }

       
        </div>
     </div>
    </div>
  )
}

export default Portfolio