import Link from "next/link"

const roles = [
  {
    title: "Data Center Engineering Assistant",
    company: "Singtel",
    dates: "April 2026 — Present",
    location: "Jurong, Singapore",
    accomplishments: [
      "Data Center Monitoring of BMS, EMS and PQMS.",
      "Maintain concurrent incident ticketing and Change Requests for maintenance and maintain uptime.",
      "respond to all issues that threatens data center uptime and keep downtime to a minimum of a tier 3 data center environment.",
    ],
  },
  {
    title: "Admin Support Assistant",
    company: "MINISTRY OF DEFENCE SINGAPORE",
    dates: "Aug 2024 — Feb 2026",
    location: "Singapore, Singapore",
    accomplishments: [
      "National Service - As IT assistant",
      "Servicenow, ticketing and IT issue resolution",
    ],
  },
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-8 text-indigo-50 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <nav className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-indigo-100/70" aria-label="Portfolio navigation">
          <Link href="/" className="transition-colors hover:text-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">Chia&apos;s Portfolio</Link>
          <div className="flex gap-5">
            <Link href="/about" className="transition-colors hover:text-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">About me</Link>
            <Link href="/explore" className="text-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">Explore</Link>
          </div>
        </nav>

        <header className="max-w-3xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">Explore</p>
          <h1 className="text-balance text-5xl tracking-tight text-indigo-50 sm:text-6xl md:text-7xl">Employment history</h1>
          <p className="max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 md:text-lg">A LinkedIn-ready overview of my professional experience, technical growth, and the work I&apos;m proud to contribute.</p>
        </header>

        <section className="space-y-5" aria-label="Employment history">
          <div className="flex justify-start">
            <a
              href="https://www.linkedin.com/in/chia-yik-thirn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-indigo-400/50 bg-indigo-600/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-indigo-50 transition-colors hover:bg-indigo-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
            >
              View LinkedIn profile
            </a>
          </div>
          {roles.map((role, index) => (
            <article key={`${role.title}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-indigo-300">Role {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 text-2xl text-indigo-50 md:text-3xl">{role.title}</h2>
                  <p className="mt-2 text-indigo-100/75">{role.company}</p>
                </div>
                <div className="font-mono text-xs leading-6 text-indigo-100/55 md:text-right">
                  <p>{role.dates}</p>
                  <p>{role.location}</p>
                </div>
              </div>
              <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm leading-6 text-indigo-100/70">
                {role.accomplishments.map((accomplishment) => <li key={accomplishment} className="max-w-3xl">{accomplishment}</li>)}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
