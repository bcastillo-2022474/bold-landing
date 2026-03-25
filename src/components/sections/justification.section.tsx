export function JustificationSection() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center">
      <h2 className="font-grotesk text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
        Building software the traditional way is broken.
      </h2>
      <div className="flex flex-col gap-8 text-left max-w-[50ch] px-4 md:px-0">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Hiring is slow and expensive</h3>
          <p className="text-muted text-sm">
            Senior developers cost $150k+ annually, take months to hire, and
            that's before benefits, equipment, and management overhead.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Freelancers are unreliable</h3>
          <p className="text-muted text-sm">
            Scope creep, missed deadlines, communication gaps, and no
            accountability when things go wrong.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Agencies are rigid and slow</h3>
          <p className="text-muted text-sm">
            Long RFP processes, fixed contracts, slow iteration cycles, and
            products that ship months behind schedule.
          </p>
        </div>
      </div>
    </div>
  );
}
