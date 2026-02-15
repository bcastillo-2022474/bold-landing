import Image from "next/image";
import { RightIcon } from "@/components/right-icon";
import { cn } from "@/utils/cn";
import IconBot from "../../../public/icons/bot.svg";
import IconCalculator from "../../../public/icons/calculator.svg";
import IconHammer from "../../../public/icons/hammer.svg";

type Card = {
  title: string;
  image: string;
  description: string;
  altImage: string;
  route: string;
};

function Card(card: Card) {
  const onHover =
    "hover:bg-linear-to-br hover:from-yellow-300 hover:to-orange-400";
  const normal = "bg-[#6B7280]/30";

  return (
    <article
      className={cn(
        "flex rounded-3xl p-0.75 w-full md:w-auto xl:aspect-19/15 md:flex-1 max-w-[500px]",
        normal,
        onHover,
      )}
    >
      <div className="bg-white p-6 md:p-10 flex flex-col items-start gap-5 w-full rounded-[calc(1.5rem-3px)]">
        <Image alt={card.altImage} src={card.image} width={50} />
        <h3 className="font-bold text-lg md:text-xl">{card.title}</h3>
        <p className="text-sm text-[#6B7280]">{card.description}</p>
        <a
          className="text-yellow-300 underline flex items-center gap-3 hover:scale-110"
          href={card.route}
        >
          <span>Case Study</span>
          <span>
            <RightIcon />
          </span>
        </a>
      </div>
    </article>
  );
}

export function WhatWeHaveBuiltSection() {
  const cards: Card[] = [
    {
      title: "Onboarding Bot",
      description:
        "A seamless HR experience that greets new hires, assigns mentors, and collects documents automatically.",
      image: IconBot,
      altImage: "Bot Icon",
      route: "#",
    },
    {
      title: "CAC Calculator with AI",
      description:
        "Marketing dashboard in Slack that pulls data from Ads and Stripe to calculate live unit economics.",
      image: IconCalculator,
      altImage: "Calculator Icon",
      route: "#",
    },
    {
      title: "Legal Case Workflow",
      description:
        "End-to-end case management from intake forms to document generation, all triggered within threads.",
      image: IconHammer,
      altImage: "Hammer Icon",
      route: "#",
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-4 md:px-10 lg:px-30 items-center py-10">
      <h2 className="font-grotesk text-2xl md:text-3xl font-bold">
        What we've built
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 xl:gap-10 w-full md:w-auto">
        {cards.map((card: Card) => (
          <Card
            key={card.title}
            route={card.route}
            image={card.image}
            title={card.title}
            description={card.description}
            altImage={card.altImage}
          />
        ))}
      </div>
    </section>
  );
}
