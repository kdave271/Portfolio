import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      text: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      link: 'https://www.linkedin.com/in/kartikdave271/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      text: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      link: 'https://github.com/kdave271'
    },
    {
      id: 3,
      text: (
        <>
          Gmail <HiOutlineMail size={25} />
        </>
      ),
      link: 'davekartik73@gmail.com'
    },
    {
      id: 4,
      text: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      link: './Kartik Resume.pdf',
      style: 'rounded-br-md',
      download: true
    }
  ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul className="">
        {links.map(({ id, text, link,style,download }) => (
          <li key={id} className={"flex justify-between bg-gray-500 w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500" + " " + style}>
            <a href={link} className='flex justify-between items-center w-full text-white' download={download} target="__blank" rel='noreferrer'>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
