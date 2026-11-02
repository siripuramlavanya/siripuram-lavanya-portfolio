import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = formRef.current
    const firstName = form?.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form?.querySelector('#lastName')?.value?.trim() || ''
    const email = form?.querySelector('#email')?.value?.trim() || ''
    const message = form?.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax "Contact" Word */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-12 pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In Front: Red Card Aligned to the Right */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-full md:w-[85%] lg:w-[75%] ml-auto bg-[#ff2a2a] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-white/20">
          <span className="uppercase tracking-[0.2em] text-white text-xs md:text-sm font-black">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] border border-white/30 text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              DM on Instagram
            </a>
          ) : (
            <a
              href={socialLinks.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] border border-white/30 text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs with Underline-only Styling */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[120px] flex-1"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Note, Urgent Mailto, and Submit Button */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <label className="flex items-start space-x-3 text-xs md:text-sm text-white/90 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="mt-0.5 w-4 h-4 rounded text-black focus:ring-0 accent-black cursor-pointer"
              />
              <span>
                I agree that my submitted information may be processed to respond to this inquiry.
              </span>
            </label>

            {/* Note & Direct Mailto Link */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-white/80">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <a
                href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry`}
                className="underline hover:text-white font-semibold shrink-0"
              >
                Need urgent response? Email directly
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full border border-white/40 bg-white/20 text-white font-bold flex items-center space-x-3 cursor-wait"
                >
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold flex items-center space-x-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-red-950 border border-red-700 text-red-200 font-bold flex items-center space-x-2"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full border border-white text-white font-bold flex items-center space-x-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
