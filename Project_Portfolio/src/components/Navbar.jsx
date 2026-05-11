import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400"
        >
          Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
              whileHover={{
                color: '#79AE6F',
              }}
              className="cursor-pointer"
            >
              <a href={item.link}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">

            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.08,
                  color: '#79AE6F',
                }}
                className="cursor-pointer text-lg"
              >
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar