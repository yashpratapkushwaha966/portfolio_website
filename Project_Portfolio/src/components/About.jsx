import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-cyan-400">
          About Me
        </h2>

        <motion.p
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg md:text-2xl leading-8 sm:leading-9 md:leading-[3rem]"
        >
          I am Pooja Bijlani, a dedicated Full Stack Developer and faculty mentor with over 6 years of professional experience in web technologies and academic projects.

          Over the years, I have worked on multiple college-level and real-time development projects, helping students understand practical implementation of modern technologies.

          My expertise includes frontend development, backend architecture, database management, and responsive UI design. Along with development, I am passionate about teaching, mentoring, and continuously learning new technologies.

          I believe in creating impactful digital solutions with clean code, modern UI, and scalable systems.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About