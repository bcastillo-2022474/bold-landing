import Image from "next/image";
import LightningIcon from "../../../public/icons/lightning.svg";
import NodesIcon from "../../../public/icons/nodes.svg";
import RocketIcon from "../../../public/icons/rocket.svg";
import ShieldIcon from "../../../public/icons/shield-mark.svg";
import UserPlusIcon from "../../../public/icons/user-plus.svg";

type FeatureCard = {
  title: string;
  image: string;
  altImage: string;
  description: string;
};

function FeatureCard(card: FeatureCard) {
  return (
    <article className="flex flex-col items-start gap-3 p-6 rounded-[32px] border border-black/5 h-full">
      <Image alt={card.altImage} src={card.image} height={20} />
      <h3 className="font-bold">{card.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{card.description}</p>
    </article>
  );
}

export function SolutionSection() {
  const features: FeatureCard[] = [
    {
      title: "Workspace management",
      description:
        "Channel structure, permissions, app approvals, retention and naming that stay clean as you grow.",
      altImage: "Shield icon for Slack workspace management",
      image: ShieldIcon,
    },
    {
      title: "AI agents",
      description:
        "Agents that answer from your docs, triage requests and draft replies, with a person approving anything customer-facing.",
      altImage: "Lightning icon for AI agents in Slack",
      image: LightningIcon,
    },
    {
      title: "Slack apps",
      description:
        "Custom apps with buttons, forms and App Home views, built on Slack's official frameworks.",
      altImage: "Rocket icon for custom Slack apps",
      image: RocketIcon,
    },
    {
      title: "Workflows",
      description:
        "Workflow Builder automations your ops team can edit, plus code where Workflow Builder stops.",
      altImage: "People icon for workflows your team can edit",
      image: UserPlusIcon,
    },
    {
      title: "Integrations",
      description:
        "Stripe, HubSpot, Linear, Shopify, your database and more, posting to the right channel with the right owner.",
      altImage: "Connected nodes icon for Slack integrations",
      image: NodesIcon,
    },
  ];

  const capabilities = [
    "Lead routing",
    "Payment and revenue alerts",
    "Support triage",
    "Incident and deploy alerts",
    "Approvals",
    "Weekly digests",
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-30 flex flex-col items-center gap-12 py-16 md:py-24">
      <div className="flex flex-col gap-5 items-start w-full max-w-[62ch]">
        <div className="flex flex-col gap-1">
          <h3 className="text-[#FFD200] uppercase font-semibold text-sm tracking-wider">
            What we do
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold">
            We move your pipelines into Slack and keep them running.
          </h2>
        </div>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          One Slack-focused team for everything that should happen in Slack. You
          ask for it in a Slack thread. We build it in your workspace and your
          GitHub, then maintain it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {features.map((card) => (
          <FeatureCard
            key={card.title}
            image={card.image}
            altImage={card.altImage}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="flex flex-col gap-5 items-center w-full pt-6">
        <h3 className="font-bold text-lg">
          Examples of pipelines we bring into Slack:
        </h3>
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
