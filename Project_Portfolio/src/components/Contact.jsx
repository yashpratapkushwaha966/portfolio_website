import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    professionalTitle: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
  await axios.post(
    "https://portfolio-website-4mup.onrender.com/api/contact", form)
      alert('Message Sent Successfully')

      setForm({
        fullName: '',
        email: '',
        mobile: '',
        professionalTitle: '',
        message: '',
      })
    } catch (error) {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <motion.p
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg md:text-2xl leading-8 md:leading-10 mb-10 md:mb-14 max-w-3xl"
        >
          Let’s connect and build something amazing together.

          Whether you need guidance for full stack development, academic projects, or modern web applications, feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-5 md:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Pooja Bijlani
            </h3>

            <p className="text-cyan-400 text-lg sm:text-xl">
              Full Stack Developer & Educator
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
              Contact Information – Email, LinkedIn, or a contact button.
            </p>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base break-words">
              <p>📧 Email: your-email@gmail.com</p>
              <p>🔗 LinkedIn: linkedin.com/in/your-profile</p>
              <br></br>
              <p>I’m always open to discussing new projects, collaborations, and innovative ideas in web development.</p>
            </div>

            <motion.a
              href="mailto:yashkushwaha485005@gmail.com"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 18px rgba(34,211,238,0.35)',
              }}
              whileTap={{ scale: 0.94 }}
              className="
                inline-block
                w-full
                sm:w-auto
                text-center
                px-8
                py-4
                rounded-full
                bg-cyan-600
                text-white
                shadow-[0_0_12px_rgba(34,211,238,0.25)]
                hover:bg-cyan-400
                duration-300
              "
            >
              Contact Button
            </motion.a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-5 bg-white/5 p-5 sm:p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] duration-300"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] duration-300"
            />

            <input
              type="text"
              name="professionalTitle"
              placeholder="Professional Title"
              value={form.professionalTitle}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] duration-300"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 sm:p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] duration-300"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.03,
                boxShadow: '0 0 18px rgba(34,211,238,0.35)',
              }}
              whileTap={{ scale: loading ? 1 : 0.92 }}
              className="w-full py-3 sm:py-4 rounded-xl bg-cyan-600 text-white font-semibold shadow-[0_0_12px_rgba(34,211,238,0.25)] hover:bg-cyan-400 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact