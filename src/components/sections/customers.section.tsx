const segments = [
  {
    title: "Startups (pre-seed to Series A)",
    body: "One place for leads, deploys and customer requests, without hiring an internal tools engineer.",
  },
  {
    title: "Fintech",
    body: "Payment, KYC and risk alerts routed to the right owner, with an audit trail in the thread.",
  },
  {
    title: "Ecommerce",
    body: "Orders, refunds, inventory and support escalations in channels your team actually watches.",
  },
];

export function CustomersSection() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Built for teams that already live in Slack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {segments.map((segment) => (
          <article
            key={segment.title}
            className="rounded-[32px] border border-black/5 p-8 flex flex-col gap-3"
          >
            <h3 className="font-bold text-lg">{segment.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{segment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
