import Image from "next/image";
import LightningIcon from "../../../public/icons/lightning.svg";
import RocketIcon from "../../../public/icons/rocket.svg";
import ShieldIcon from "../../../public/icons/shield.svg";
import UserPlusIcon from "../../../public/icons/user-plus.svg";

type Card = {
  title: string;
  image: string;
  altImage: string;
  description: string;
};

function Card(card: Card) {
  return (
    <article className="flex bg-white flex-col items-start gap-3 p-5 rounded-2xl">
      <Image alt={card.altImage} src={card.image} height={20} />
      <h3 className="font-bold">{card.title}</h3>
      <p className="text-sm text-[#6B7280]">{card.description}</p>
    </article>
  );
}

export function SolutionSection() {
  const cards: Card[] = [
    {
      title: "Ship Fast",
      description: "Get your first internal tool live in under 2 weeks",
      altImage: "Lightning img",
      image: LightningIcon,
    },
    {
      title: "Always Evolving",
      description:
        "Request updates and new features anytime as your needs scale.",
      altImage: "Rocket img",
      image: RocketIcon,
    },
    {
      title: "Built for You",
      description: "Custom integrations that work exactly how your team does.",
      altImage: "User plus img",
      image: UserPlusIcon,
    },
    {
      title: "Fully Managed",
      description: "We handle hosting, security, and maintenance 24/7.",
      altImage: "Shield img",
      image: ShieldIcon,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-20 w-full gap-8 md:gap-5 px-4 md:px-10 lg:px-30 bg-[#F8F9FA]">
      <div className="flex flex-col gap-5 items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-yellow-300 uppercase font-semibold text-sm md:text-base">
            The Solution
          </h3>
          <h2 className="flex flex-col text-2xl md:text-3xl font-bold">
            <span>One Subscription.</span>
            <span>Unlimited possibilities.</span>
          </h2>
        </div>
        <p className="text-[#6B7280] text-sm md:text-base">
          Stop hiring expensive agencies for one-off tools. We are your
          dedicated software factory inside Slack.
        </p>
        <button
          type="button"
          className="font-grotesk text-black bg-yellow-300 px-3 py-2 rounded-xl font-semibold text-sm md:text-base"
        >
          Explore our process
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-5">
        {cards.map((card: Card) => (
          <Card
            key={card.title}
            image={card.image}
            altImage={card.altImage}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
