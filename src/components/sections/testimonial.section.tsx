export function TestimonialSection() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[4/3] lg:aspect-auto w-full border border-black/5">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/Ecommerce_onboarding_agent_slack.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl md:text-3xl font-bold">
            Ecommerce: onboarding and first-line support, handled inside Slack.
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            An ecommerce platform was answering new-user questions by hand. We
            built a Slack agent that onboards new users, answers product
            questions and hands off to a person when it should. The team runs
            and improves it from Slack.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] shrink-0"></span>
              Hands off to a person when it should
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] shrink-0"></span>
              Connected to the client&apos;s internal systems
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] shrink-0"></span>
              Changes requested and shipped in a Slack thread
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
