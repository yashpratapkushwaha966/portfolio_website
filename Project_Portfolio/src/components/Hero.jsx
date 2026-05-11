import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/f1/24/cf/f124cf3a1c7d268d81d8e896ac9d66dc.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-cyan-500/20 blur-[90px] md:blur-[120px] rounded-full top-[-80px] left-[-80px] animate-pulse"></div>

      <div className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-purple-500/20 blur-[90px] md:blur-[120px] rounded-full bottom-[-80px] right-[-80px] animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-2 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
        >
          <TypeAnimation
            sequence={[
              "Hello, I’m Pooja Bijlani",
              2000,
              "Full Stack Developer",
              2000,
              "Professional Skills",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 md:mt-8 text-gray-300 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-7 md:leading-9"
        >
          I love creating innovative digital experiences while guiding students to become industry-ready developers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 flex-wrap"
        >
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-cyan-500 hover:scale-110 hover:bg-cyan-400 duration-300 shadow-[0_0_5px_rgba(34,211,238,0.6)]">
            Explore
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 duration-300 inline-block"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Floating Scroll Animation */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-14 md:mt-20 text-gray-400"
        >
          Scroll Down ↓
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero