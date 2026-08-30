import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-8 text-indigo-50 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <nav className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-indigo-100/70" aria-label="Portfolio navigation">
          <Link href="/" className="transition-colors hover:text-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">Chia&apos;s Portfolio</Link>
          <div className="flex gap-5">
            <Link href="/about" className="text-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">About me</Link>
            <Link href="/explore" className="transition-colors hover:text-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400">Explore</Link>
          </div>
        </nav>

        <section className="max-w-3xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">About me</p>
          <h1 className="text-balance text-5xl tracking-tight text-indigo-50 sm:text-6xl md:text-7xl">Keeping a Maintainable Uptime Environment.</h1>
          <p className="max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 md:text-lg">
            I&apos;m a Data Center Engineering Assistant pursuing opportunities in Internal IT and system administration. My interests include Cisco technologies, infrastructure, troubleshooting, and the many details that keep data center environments reliable.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3" aria-label="Professional focus areas">
          {[
            ["01", "Infrastructure", "Learning how resilient data center systems are designed, monitored, and maintained."],
            ["02", "System administration", "Growing practical skills across networking, access, hardware, and support workflows."],
            ["03", "Continuous learning", "Bringing curiosity, clear documentation, and a dependable approach to every environment."],
          ].map(([number, title, description]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <span className="font-mono text-xs text-indigo-300">{number}</span>
              <h2 className="mt-8 text-xl text-indigo-50">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-indigo-100/65">{description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
