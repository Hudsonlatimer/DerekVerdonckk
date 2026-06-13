import { bio, tagline, contacts, filmCredits, tvAnimationCredits, actingCredits, teachingCredits, education, software, qualifications } from "@/lib/data";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 sm:space-y-32">
      {/* Hero / Bio */}
      <section id="bio" className="max-w-3xl pt-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Derek Verdonck
        </h1>
        <p className="text-base sm:text-lg text-amber-500/90 font-medium mb-6 leading-relaxed">
          {tagline}
        </p>
        {bio.split("\n\n").map((para, i) => (
          <p key={i} className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
            {para}
          </p>
        ))}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 sm:gap-x-8 mt-10">
          {contacts.map((c) => (
            <a
              key={c.platform}
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-gray-600 uppercase tracking-wider text-xs w-14 shrink-0">{c.platform}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* The Script Called For — paused per Jenell */}
      {/* <section id="process"> ... </section> */}

      {/* CV & Credits */}
      <section id="cv">
        <h2 className="text-xl sm:text-2xl font-semibold mb-8 uppercase tracking-widest text-gray-500">CV & Credits</h2>

        <div className="space-y-16">
          {/* Film & Television */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-6 pb-2 border-b border-white/10">Film & Television</h3>
            <div className="grid gap-5">
              {filmCredits.map((credit, i) => (
                <div key={i} className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr_220px] gap-x-4 gap-y-1">
                  <div className="text-gray-500 text-sm shrink-0 pt-0.5">{credit.year}</div>
                  <div className="font-medium text-gray-200">{credit.title}</div>
                  <div className="text-gray-400 text-sm col-start-2 sm:col-start-3">{credit.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Television Animation */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-6 pb-2 border-b border-white/10">Television Animation</h3>
            <div className="grid gap-6">
              {tvAnimationCredits.map((credit, i) => (
                <div key={i} className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr_220px] gap-x-4 gap-y-1">
                  <div className="text-gray-500 text-sm shrink-0 pt-0.5">{credit.year}</div>
                  <div>
                    <div className="font-medium text-gray-200">{credit.title}</div>
                    {credit.studio && (
                      <div className="text-sm text-gray-500 mt-0.5">{credit.studio}</div>
                    )}
                    {credit.accolades && (
                      <div className="text-xs text-amber-500/80 mt-1.5 flex gap-1.5 items-start">
                        <span className="shrink-0 mt-px">★</span>
                        <span>{credit.accolades}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm col-start-2 sm:col-start-3 mt-0.5">{credit.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Acting */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-6 pb-2 border-b border-white/10">Acting</h3>
            <div className="grid gap-4">
              {actingCredits.map((credit, i) => (
                <div key={i} className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr_220px] gap-x-4 gap-y-1">
                  <div className="text-gray-500 text-sm shrink-0 pt-0.5">{credit.year}</div>
                  <div className="font-medium text-gray-200">{credit.title}</div>
                  <div className="text-gray-400 text-sm col-start-2 sm:col-start-3">{credit.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-6 pb-2 border-b border-white/10">Teaching</h3>
            <div className="grid gap-6">
              {teachingCredits.map((t, i) => (
                <div key={i} className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr_220px] gap-x-4 gap-y-1">
                  <div className="text-gray-500 text-sm shrink-0 pt-0.5">{t.years}</div>
                  <div>
                    <div className="font-medium text-gray-200">{t.program}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{t.institution}</div>
                  </div>
                  <div className="text-gray-400 text-sm col-start-2 sm:col-start-3 mt-0.5">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2 className="text-xl sm:text-2xl font-semibold mb-8 uppercase tracking-widest text-gray-500">Education & Training</h2>
        <div className="grid gap-6 max-w-3xl">
          {education.map((e, i) => (
            <div key={i} className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-x-4">
              <div className="text-gray-500 text-sm shrink-0 pt-0.5">{e.year}</div>
              <div>
                <div className="font-medium text-gray-200">{e.credential}</div>
                <div className="text-sm text-gray-500 mt-0.5">{e.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Software & Skills */}
      <section id="skills">
        <h2 className="text-xl sm:text-2xl font-semibold mb-8 uppercase tracking-widest text-gray-500">Software & Skills</h2>
        <div className="flex flex-wrap gap-3">
          {software.map((s, i) => (
            <span key={i} className="text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              {s}
            </span>
          ))}
          {qualifications.map((q, i) => (
            <span key={i} className="text-sm text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              {q}
            </span>
          ))}
        </div>
      </section>

      {/* Inspiration — paused per Jenell */}
      {/* <section id="inspiration"> ... </section> */}

    </div>
  );
}
