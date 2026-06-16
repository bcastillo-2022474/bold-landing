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
            <source src="/0325.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl md:text-3xl font-bold">
            A real onboarding agent we built for an ecommerce platform.
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            This agent handles user onboarding, product education and early
            support — reducing manual intervention and improving first-time user
            activation.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] shrink-0"></span>
              Built with custom logic and integrations
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] shrink-0"></span>
              Connected to the client&apos;s internal systems
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD200] shrink-0"></span>
              Managed and iterated through Slack
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
