import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
const NavBar = () => {
  const [nav, Setnav] = useState(false)
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' }
  ]
  return (
    <div className="flex bg-black h-10 items-center justify-between px-4">
      <span className="font-signature text-white text-2xl">Kartik Dave</span>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-gray-500 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={800}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => Setnav(!nav)}
        className="text-gray-500 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-3xl text-gray-500 cursor-pointer capitalize font-medium"
            >
              <Link
                onClick={() => Setnav(!nav)}
                to={link}
                smooth
                duration={800}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
