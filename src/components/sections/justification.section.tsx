export function JustificationSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-12 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
      <div className="flex flex-col gap-4 items-center max-w-[62ch]">
        <h2 className="text-2xl md:text-3xl font-bold">
          Your team&apos;s work is spread across too many tabs.
        </h2>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Leads sit in a form inbox. Payment alerts live in Stripe. Bugs are in
          Linear, approvals in email, customer questions in a help desk. Every
          handoff means another tool, another login, another &quot;did anyone
          see this?&quot;
        </p>
      </div>
      <div className="flex flex-col gap-6 text-left max-w-[50ch]">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Things fall through the cracks.</h3>
          <p className="text-muted text-sm leading-relaxed">
            A lead or a failed payment waits because nobody was looking at that
            tool at that moment.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Answers are slow.</h3>
          <p className="text-muted text-sm leading-relaxed">
            People jump between apps to find context before they can reply to a
            customer or a teammate.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">
            Processes live in people&apos;s heads.
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Copy-paste between tools works until the person who knows the steps
            is on vacation.
          </p>
        </div>
      </div>
      <p className="text-xs text-muted leading-relaxed max-w-[62ch]">
        App switching has a real cost. In a 2022 Harvard Business Review study
        of 137 workers at three Fortune 500 companies, people toggled between
        apps and websites about 1,200 times a day.{" "}
        <a
          href="https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications"
          className="underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>
    </section>
  );
}
