import React from 'react'

const About = () => {
  return (
    <div name = 'about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 border-gray-400'>About</p>
        </div>
          <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sequi nesciunt accusantium, harum recusandae commodi animi alias aperiam quas.
          </p>
      </div>
    </div>
  )
}

export default About
