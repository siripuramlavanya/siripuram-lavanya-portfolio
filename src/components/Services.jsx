import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef(null)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef.current || !cardRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRect.height || 1350

    if (latest * containerHeight >= cardTopRelativeToContainer + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 select-none ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_35px_rgba(255,42,42,0.4)] text-white'
          : 'bg-white shadow-xl text-gray-900 border border-gray-100'
      } ${className}`}
    >
      {/* Punched Hole Circle at the Top */}
      <div className="w-4 h-4 rounded-full mx-auto bg-gray-200 border border-gray-300 shadow-inner" />

      {/* Inner Rounded Panel */}
      <div
        className={`mt-4 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <span
          className={`font-serif italic font-bold text-3xl transition-colors duration-700 ${
            isActive ? 'text-white/80' : 'text-gray-400'
          }`}
        >
          {number}
        </span>
        <div className="mt-4">
          <h3
            className={`text-2xl font-black mb-2 transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed transition-colors duration-700 ${
              isActive ? 'text-white/90' : 'text-gray-600'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const cardConfigs = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest inline-block mb-4">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 mb-4">
            {skillsContent.heading}
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-[#ff2a2a] inline-block ml-2 align-bottom"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Path SVG */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopD}
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
          />

          {/* Layer 2: Mask for Reveal */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopD}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3: Animated Dashed Path */}
          <path
            d={desktopD}
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            fill="none"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Path SVG */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="10"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          <path
            d="M 2,0 L 2,100"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardConfigs[index]?.className || ''}
              aosDelay={cardConfigs[index]?.aosDelay || 100}
              aosType={cardConfigs[index]?.aosType || 'fade-up'}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* Handwritten End Note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none z-20">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
