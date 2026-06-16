export function JustificationSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-12 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
      <h2 className="text-2xl md:text-3xl font-bold md:px-24 max-w-[70ch]">
        Building software the traditional way is broken.
      </h2>
      <div className="flex flex-col gap-6 text-left max-w-[50ch]">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Hiring is slow and expensive</h3>
          <p className="text-muted text-sm leading-relaxed">
            Senior developers cost $150k+ annually, take months to hire, and
            that&apos;s before benefits, equipment, and management overhead.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Freelancers are unreliable</h3>
          <p className="text-muted text-sm leading-relaxed">
            Scope creep, missed deadlines, communication gaps, and no
            accountability when things go wrong.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Agencies are rigid and slow</h3>
          <p className="text-muted text-sm leading-relaxed">
            Long RFP processes, fixed contracts, slow iteration cycles, and
            products that ship months behind schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
