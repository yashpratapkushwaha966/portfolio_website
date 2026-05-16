import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 border-t border-cyan-500/20 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-5 sm:gap-6">

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 text-xl sm:text-2xl">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaTwitter />
          </a>

        </div>

        {/* Footer Text */}
        <p className="text-xs sm:text-sm text-center tracking-wide leading-6">
          © 2026 Pooja Bijlani Portfolio | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer

