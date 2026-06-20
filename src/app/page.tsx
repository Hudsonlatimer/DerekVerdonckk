import { bio, tagline, contacts, filmCredits, tvAnimationCredits, actingCredits, teachingCredits, education, software, qualifications, quotes } from "@/lib/data";
import LogoRibbon from "@/components/LogoRibbon";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 sm:space-y-32">
      {/* Hero / Bio */}
      <section id="bio" className="max-w-3xl pt-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Derek Verdonck
        </h1>
        <p className="text-base sm:text-lg text-amber-500/90 font-medium mb-8 leading-relaxed">
          {tagline}
        </p>
        {bio.split("\n\n").map((para, i) => (
          <p key={i} className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
            {para}
          </p>
        ))}
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
            <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-x-4">
              <div className="text-gray-500 text-sm pt-1 leading-snug">2019–<br/>Present</div>
              <div className="flex flex-col gap-2">
                {actingCredits.map((credit, i) => (
                  <span key={i} className="font-medium text-gray-200">{credit.title}</span>
                ))}
              </div>
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

      {/* Studios & Production Companies */}
      <section id="studios">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 uppercase tracking-widest text-gray-500">Studios &amp; Production Companies</h2>
        <p className="text-sm text-gray-500 mb-10 max-w-2xl">
          Two decades of work across some of the most recognized names in animation and film.
        </p>
        <LogoRibbon />
      </section>

      {/* Endorsements — placed above the footer/contact for social proof.
          Renders only once quotes are added in data.ts (2 of 4 in so far). */}
      {quotes.length > 0 && (
        <section id="endorsements">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 uppercase tracking-widest text-gray-500">Endorsements</h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {quotes.map((q, i) => (
              <figure key={i} className="border-l-2 border-amber-500/40 pl-6">
                <blockquote className="text-base sm:text-lg text-gray-300 leading-relaxed italic">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="text-gray-200 font-medium">{q.author}</span>
                  {q.title && <span className="text-gray-500"> — {q.title}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Let's Work Together — contact CTA (from outline) */}
      <section id="contact">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 uppercase tracking-widest text-gray-500">Let&rsquo;s Work Together</h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
          Available for film art department, animation, and virtual production work. Get in touch.
        </p>
        <div className="flex flex-wrap gap-3">
          {contacts.map((c) => (
            <a
              key={c.platform}
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-gray-200 bg-white/5 border border-white/15 hover:border-white/40 hover:bg-white/10 px-5 py-2.5 rounded-full transition-colors"
            >
              <span className="text-gray-500 uppercase tracking-wider text-xs mr-2">{c.platform}</span>
              {c.label}
            </a>
          ))}
        </div>
      </section>

      {/* Inspiration — paused per Jenell */}
      {/* <section id="inspiration"> ... </section> */}

    </div>
  );
}
