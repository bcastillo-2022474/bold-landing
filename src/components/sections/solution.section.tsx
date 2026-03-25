import Image from "next/image";
import LightningIcon from "../../../public/icons/lightning.svg";
import RocketIcon from "../../../public/icons/rocket.svg";
import ShieldIcon from "../../../public/icons/shield.svg";
import UserPlusIcon from "../../../public/icons/user-plus.svg";

type FeatureCard = {
  title: string;
  image: string;
  altImage: string;
  description: string;
};

function FeatureCard(card: FeatureCard) {
  return (
    <article className="flex bg-white flex-col items-start gap-3 p-5 rounded-2xl">
      <Image alt={card.altImage} src={card.image} height={20} />
      <h3 className="font-bold">{card.title}</h3>
      <p className="text-sm text-muted">{card.description}</p>
    </article>
  );
}

export function SolutionSection() {
  const features: FeatureCard[] = [
    {
      title: "Dedicated Team",
      description:
        "Your own developers who learn your stack and context over time",
      altImage: "Lightning img",
      image: LightningIcon,
    },
    {
      title: "Slack-First",
      description:
        "Submit requests, get updates, and review builds — all in Slack",
      altImage: "Rocket img",
      image: RocketIcon,
    },
    {
      title: "Flexible Scope",
      description: "Build one thing or fifty. Pause or cancel anytime.",
      altImage: "User plus img",
      image: UserPlusIcon,
    },
    {
      title: "Fully Managed",
      description: "We handle hosting, security, deployment, and maintenance.",
      altImage: "Shield img",
      image: ShieldIcon,
    },
  ];

  const capabilities = [
    "SaaS MVPs",
    "Internal Tools",
    "API Integrations",
    "Slack Bots & Automations",
  ];

  return (
    <section className="py-10 md:py-20 w-full gap-10 px-4 md:px-10 lg:px-30 bg-section-bg flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-8 md:gap-5">
        <div className="flex flex-col gap-5 items-start text-center md:text-left">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <h3 className="text-yellow-600 uppercase font-semibold text-sm md:text-base">
              The Bold Studio Model
            </h3>
            <h2 className="flex flex-col text-2xl md:text-3xl font-bold">
              <span>Your dedicated dev team.</span>
              <span>One flat monthly fee.</span>
            </h2>
          </div>
          <p className="text-muted text-sm md:text-base">
            Skip the hiring process. Get a dedicated development team that works
            exclusively on your projects — communicated entirely through Slack.
            Request features, ask for updates, and deploy changes without ever
            leaving your workspace.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {features.map((card: FeatureCard) => (
            <FeatureCard
              key={card.title}
              image={card.image}
              altImage={card.altImage}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center w-full border-t border-border-light pt-10 px-4 md:px-0">
        <h3 className="font-bold text-lg">What you can build</h3>
        <p className="text-muted text-sm text-center max-w-[50ch]">
          From MVPs to internal tools, automations to integrations — if you can
          describe it, we can build it.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 px-4 md:px-0">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full px-5 py-2 border border-muted/30 bg-white text-sm"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
