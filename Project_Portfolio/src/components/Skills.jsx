import { motion } from 'framer-motion'

const skills = [
  'Frontend Development',
  'React js',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Backend Development',
  'Node.js',
  'Express.js',
  'REST APIs',
  'Database',
  'MongoDB',
  'MySQL',
  'Professional Skills',
  'Problem Solving',
  'Team Collaboration',
  'Project Guidance',
  'Student Mentoring',
  'Academic Project Development',
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 md:mb-10">
            Skills
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-8 md:leading-10 mb-10 md:mb-12">
            A passionate Full Stack Developer & Educator with 6+ years of
            experience in modern web development, academic mentoring, and
            real-world college projects.

            I specialize in building scalable, responsive, and user-friendly
            web applications using modern technologies like React, Node.js,
            MongoDB, and Express.js.
          </p>

          {/* FLOATING SKILLS */}
          <div className="flex flex-wrap gap-3 sm:gap-5">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotate: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                whileHover={{
                  scale: 1,
                  y: -10,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 120,
                }}
                viewport={{ once: true }}
                className="
                  px-4 sm:px-6
                  py-3 sm:py-4
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-lg
                  text-sm sm:text-base md:text-lg
                  text-white
                  shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  cursor-pointer
                "
              >
                {skill}
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 120, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center mt-10 md:mt-0"
        >

          {/* GLOW EFFECT */}
          <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-cyan-500/20 blur-[90px] md:blur-[120px] rounded-full"></div>

          {/* FLOATING IMAGE */}
          <motion.img
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
            }}
            src="https://i.pinimg.com/736x/ca/60/b0/ca60b08db3ae1da32ef2c913eeef100b.jpg"
            alt="skills"
            className="
              relative
              z-10
              w-full
              max-w-[280px]
              sm:max-w-[350px]
              md:max-w-[450px]
              rounded-4xl
              drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]
            "
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Skills