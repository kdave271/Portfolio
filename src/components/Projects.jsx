import React from 'react'
import priceTracker from '../assets/price-tracker.jpg'
import chat from '../assets/chat.png'
import carPrice from '../assets/car-price.png'
import asl from '../assets/asl.jpg'
const Projects = () => {
  const projects = [
    {
      title: 'Realtime chat application',
      description:
        'Created a real time web application in which users can interact with each other. Socket.io is used to manage real time web socket connections to a Node.js server that will allow to communicate real time chat messages to all users connected to a single server',
      imageURL: chat,
      technologyStack: ['NodeJs', 'Socket.io', 'HTML', 'CSS', 'Javascript']
    },
    {
      title: 'Cryptocurrency Price Tracker App',
      description:
        'Build a web application using react that displays real time value of top 10 cryptocurrency along with their price. Axios is used for fetching data from api.',
      imageURL: priceTracker,
      technologyStack: ['React', 'Axios', 'Javascript', 'HTML', 'CSS']
    },
    {
      title: 'American Sign Language',
      description:
        'Designed a web application that allows the user to insert an image of hand gestures and the neural network model will predict the alphabet with 88% accuracy.',
      imageURL: asl,
      technologyStack: [
        'Python',
        'OpenCV',
        'Flask',
        'Tensorflow',
        'Deep Learning',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Used Car Price Predictor',
      description:
        'Created a Web Application that predicts the price of a used car with 72% accuracy based on various features. It is deployed using Flask on Heroku.',
      imageURL: carPrice,
      technologyStack: ['Python', 'Machine Learning', 'HTML', 'CSS', 'Flask']
    }
  ]
  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-black to-gray-700 text-white"
    >
      <div className="flex flex-col h-full w-full justify-center p-4">
        <p className="text-2xl">Personal Projects</p>
        <div className="pt-4 flex flex-col space-y-2 md:space-y-4 ">
          {projects.map(
            ({ id, title, description, imageURL, technologyStack }) => (
              <div
                key={id}
                className="flex rounded shadow-2xl bg-gray-700 space-x-4 md:space-x-8"
              >
                <img
                  src={imageURL}
                  alt="Project img"
                  srcset=""
                  className="w-1/5 py-1 pl-1 md:py-2 md:pl-2 rounded-md"
                />
                <div className="flex flex-col p-1 md:p-2 justify-between space-y-1">
                  <p className="text-xl">{title}</p>
                  <p className="indent-0 ">{description}</p>
                  <div className="flex justify-start">
                    <span>Technology Stack : </span>
                  </div>
                  <div className="flex flex-wrap space-x-2">
                    {technologyStack.map(ele => (
                      <span className="">{ele}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
