export function CallToActionSection() {
  return (
    <section
      id="book-a-call"
      className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24 flex flex-col items-center"
    >
      <div className="w-full max-w-4xl">
        <div className="rounded-[32px] border border-black/5 overflow-hidden">
          <div className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Book a Call
            </h2>
            <p className="text-muted max-w-[50ch] mx-auto mt-4 leading-relaxed">
              Tell us about your project — we build custom Slack apps, automate
              Slack workflows, and deploy AI agents. We&apos;ll get back to you
              within 24 hours. No pushy sales — just a conversation about what
              you need.
            </p>
          </div>
          <div className="px-6 md:px-12 pb-8 md:pb-12">
            <iframe
              src="https://tally.so/embed/44GD1d?alignLeft=1&hideTitle=1&transparentBackground=1"
              frameBorder="0"
              title="Book a Call"
              className="w-full rounded-2xl"
              style={{ height: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
