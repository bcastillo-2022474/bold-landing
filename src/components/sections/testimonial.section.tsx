type Person = {
  name: string;
  position: string;
  photo?: string;
};

type Testimonial = {
  quote: string;
  stars: number;
  person: Person;
};

function Person({ name, position, photo }: Person) {
  const hasPhoto = Boolean(photo);

  return (
    <div className="flex gap-3 items-center">
      {!hasPhoto && <div className="size-12 rounded-full bg-[#E5E7EB]" />}
      <div className="flex flex-col">
        <span className="text-nowrap font-bold">{name}</span>
        <span className="text-nowrap text-[#6B7280] text-sm">{position}</span>
      </div>
    </div>
  );
}

function Card({ quote, stars, person }: Testimonial) {
  return (
    <article className="w-full flex flex-col gap-5 items-center px-4 md:px-10 lg:px-30">
      <div className="flex gap-2">
        {Array.from({ length: stars }).map(() => (
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.84999 14.825L9.99999 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L9.99999 5.125L8.54999 8.5L4.89999 8.825L7.67499 11.25L6.84999 14.825ZM3.82499 19L5.44999 11.975L-9.70624e-06 7.25L7.19999 6.625L9.99999 -4.76837e-07L12.8 6.625L20 7.25L14.55 11.975L16.175 19L9.99999 15.275L3.82499 19Z"
              fill="#FFD200"
            />
          </svg>
        ))}
      </div>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-grotesk font-medium max-w-[50ch] text-center">
        <span>"</span>
        <span>{quote}</span>
        <span>"</span>
      </h3>
      <Person
        name={person.name}
        position={person.position}
        photo={person.photo}
        key={person.name}
      />
    </article>
  );
}

export function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      quote: `Bold Studio transformed how our ops team functions. We've saved over 40 hours a week by moving our core processes directly into Slack.`,
      stars: 5,
      person: {
        name: "Joao Castillo",
        position: "CEO at HGQ",
      },
    },
  ];

  return (
    <section className="w-full overflow-hidden py-10 md:py-20">
      {testimonials.map((testimonial: Testimonial) => (
        <Card
          key={testimonial.person.name}
          quote={testimonial.quote}
          stars={testimonial.stars}
          person={testimonial.person}
        />
      ))}
    </section>
  );
}
