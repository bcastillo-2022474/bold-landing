export function TestimonialSection() {
  return (
    <section className="w-full overflow-hidden py-10 md:py-20 px-4 md:px-10 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3] lg:aspect-auto w-full">
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

        <div className="flex flex-col gap-6 px-0 md:px-0">
          <h2 className="font-grotesk text-xl md:text-3xl font-bold">
            A real onboarding agent we built for an ecommerce platform.
          </h2>
          <p className="text-muted text-sm md:text-base">
            This agent handles user onboarding, product education and early
            support — reducing manual intervention and improving first-time user
            activation.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-300 shrink-0"></span>
              Built with custom logic and integrations
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-300 shrink-0"></span>
              Connected to the client&apos;s internal systems
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-300 shrink-0"></span>
              Managed and iterated through Slack
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
