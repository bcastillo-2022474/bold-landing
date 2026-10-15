import { META } from "@/constants/site";

export function FaqSection() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Questions, answered
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-3xl">
        {META.faq.map((item) => (
          <article
            key={item.question}
            className="rounded-[32px] border border-black/5 p-6 md:p-8 flex flex-col gap-2"
          >
            <h3 className="font-bold text-base md:text-lg">{item.question}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
