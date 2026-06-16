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
    <article className="flex flex-col items-start gap-3 p-6 rounded-[32px] border border-black/5">
      <Image alt={card.altImage} src={card.image} height={20} />
      <h3 className="font-bold">{card.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{card.description}</p>
    </article>
  );
}

export function SolutionSection() {
  const features: FeatureCard[] = [
    {
      title: "Dedicated Team",
      description:
        "Your own developers who learn your stack, build custom Slack apps, and own your project over time",
      altImage: "Lightning bolt icon representing speed and quick delivery",
      image: LightningIcon,
    },
    {
      title: "Slack-First",
      description:
        "Submit requests, get updates, and review builds — all in Slack without leaving your workspace",
      altImage: "Rocket icon representing fast deployment and launch",
      image: RocketIcon,
    },
    {
      title: "Flexible Scope",
      description: "Build one thing or fifty. Pause or cancel anytime.",
      altImage: "User plus icon representing team growth and onboarding",
      image: UserPlusIcon,
    },
    {
      title: "Fully Managed",
      description: "We handle hosting, security, deployment, and maintenance.",
      altImage:
        "Shield icon representing security and fully managed protection",
      image: ShieldIcon,
    },
  ];

  const capabilities = [
    "Custom Slack Apps",
    "Slack Workflows & Automations",
    "AI Slack Agents",
    "SaaS MVPs",
    "Internal Tools",
    "API Integrations",
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-30 flex flex-col items-center gap-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-10 md:gap-16">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#FFD200] uppercase font-semibold text-sm tracking-wider">
              The Bold Studio Model
            </h3>
            <h2 className="flex flex-col text-2xl md:text-3xl font-bold">
              <span>Your dedicated dev team.</span>
              <span>One flat monthly fee.</span>
            </h2>
          </div>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Skip the hiring process. Get a dedicated development team that
            builds custom Slack apps, automates Slack workflows, and creates AI
            agents — communicated entirely through Slack. Request features, ask
            for updates, and deploy changes without ever leaving your workspace.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
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

      <div className="flex flex-col gap-5 items-center w-full pt-6">
        <h3 className="font-bold text-lg">What you can build</h3>
        <p className="text-muted text-sm text-center max-w-[50ch] leading-relaxed">
          From MVPs to internal tools, automations to integrations — if you can
          describe it, we can build it.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full px-5 py-2 border border-black/10 text-sm"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
