import React from 'react'

const Education = () => {
  const studies = [
    {
      id: 1,
      degree: 'Bachelors of Technology',
      school: 'Techno India NJR Institute of Technology',
      duration: '2018 - 2022',
      major: 'Computer Science Engineering'
    },
    {
      id: 2,
      degree: 'Class XII',
      school: 'Kendriya Vidyalaya No.2, Udaipur',
      duration: '2018'
    },
    {
      id: 3,
      degree: 'Class X',
      school: 'Kendriya Vidyalaya No.2, Udaipur',
      duration: '2016'
    }
  ]
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white flex flex-col justify-center">
      <div className="flex flex-col px-6 sm:px-10 md:px-20">
        <p className="text-2xl pb-8">Education</p>
        <div className='space-y-6'>
          {studies.map(({ id, degree, school, duration, major }) => (
            <div key={id} className="flex flex-col space-y-1">
              <div className="flex justify-between">
                <p className="text-xl">{degree}</p>
                <p>{duration}</p>
              </div>
              <div className="flex flex-col">
                <span>{school}</span>
                <span>{major}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
