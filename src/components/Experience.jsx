import React from 'react'
import css from '../assets/css.png'
import flask from '../assets/flask.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import python from '../assets/python.jpg'
import tailwind from '../assets/tailwind.png'
import reactImg from '../assets/react.png'
const Experience = () => {
  const technologies = [
    {
      id: 1,
      logo: html,
      tech: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      logo: css,
      tech: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      logo: js,
      tech: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 9,
      logo: reactImg,
      tech: 'React',
      style: 'shadow-blue-500'
    },
    {
      id: 4,
      logo: nextjs,
      tech: 'NextJS',
      style: 'shadow-white'
    },
    {
      id: 5,
      logo: python,
      tech: 'Python',
      style: 'shadow-blue-500'
    },
    // {
    //   id: 6,
    //   logo: flask,
    //   tech: 'Flask',
    //   style: 'shadow-gray-500'
    // },
    {
      id: 7,
      logo: github,
      tech: 'Github',
      style: 'shadow-gray-500'
    },
    {
      id: 8,
      logo: tailwind,
      tech: 'Tailwind',
      style: 'shadow-sky-500'
    }
  ]
  const exp = {
    jobTitle: 'Software Engineer Intern',
    employer: 'Durable Medical Equipment',
    duration: 'Aug 2021 - March 2022',
    description: [
      'Designed and developed web pages using React and NextJS framework.',
      'Experience in web page layout creation using Tailwind CSS framework',
      'Developed scripts for automation using Python and Javascript',
      'Build 15+ RESTful APIs using Flask Framework',
      'Implemented test scripts using Selenium and Python',
      'Worked on Named Entity Recognition with Custom Sequence Labelling with 60% accuracy'
    ]
  }
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-700 to-black text-white flex flex-col justify-around"
    >
      <div className="flex flex-col px-6 sm:px-10 md:px-20 space-y-6">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl pb-8">Experience</p>
          <div className="flex items-center justify-between">
            <span className="text-lg">{exp.jobTitle}</span>
            <p>{exp.duration}</p>
          </div>
          <a href="https://www.medicaleshop.com">
            <span className="text-blue-400">{exp.employer}</span>
          </a>
          <div className="py-4 flex flex-col space-y-2">
            {exp.description.map(desc => (
              <p>- {desc}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg">Technologies that I've worked with :</p>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center pt-6 px-12 sm:px-0">
            {technologies.map(({ id, logo, tech,style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style}`}
              >
                <img src={logo} alt="html" className="w-20 mx-auto" />
                <span className='mt-2 '>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
