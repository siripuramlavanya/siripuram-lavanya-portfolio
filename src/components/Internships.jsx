import { internshipsList } from '../data/portfolioData'

function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest inline-block mb-4">
            Work History
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Practical industry internships applying SQL data modeling, exploratory analysis, and executive dashboard design.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internshipsList.map((item, index) => (
            <div
              key={item.organization}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    {item.organization}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 font-mono text-xs">
                    {item.duration}
                  </span>
                </div>

                <p className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold mb-6">
                  {item.role}
                </p>

                {/* Skills gained */}
                <div className="mb-6">
                  <span className="text-xs uppercase font-mono tracking-wider text-white/40 block mb-2">
                    Key Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase font-mono tracking-wider text-white/40 block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
