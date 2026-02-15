export function JustificationSection() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center">
      <h2 className="font-grotesk text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
        Your team is drowning in repetitive tasks.
      </h2>
      <p className="text-muted px-4 md:px-0 max-w-[65ch]">
        Too much time is wasted on manual data entry, chasing approvals, and
        switching between tools. We turn your Slack workspace into a mission
        control center that does the heavy lifting for you.
      </p>
    </div>
  );
}
