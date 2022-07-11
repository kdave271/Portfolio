import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import myImage from '../assets/myImage.png'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-500 h-screen "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-5 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>I'm a Software Engineer</h2>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            deserunt nobis suscipit tempora fugiat nemo voluptas eius
            dignissimos quas quasi nostrum sequi repellat ratione fugit,
            similique libero ipsum, iste magnam.
          </p>
          <div>
            <Link to="portfolio" smooth duration={800} className="group flex items-center w-fit my-5 bg-cyan-500 rounded-md px-6 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className='group-hover:rotate-90 duration-300 ml-2'>
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={myImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'  />
        </div>
      </div>
    </div>
  )
}

export default Home
