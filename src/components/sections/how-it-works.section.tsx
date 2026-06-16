import Image from "next/image";
import IconLightning from "../../../public/icons/lightning.svg";
import IconRocket from "../../../public/icons/rocket.svg";
import IconShield from "../../../public/icons/shield.svg";
import IconUserPlus from "../../../public/icons/user-plus.svg";

type Step = {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
};

function StepCard({ stepNumber, title, description, icon }: Step) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-8 rounded-[32px] border border-black/5">
      <div className="w-14 h-14 rounded-full bg-[#FFD200] flex items-center justify-center text-lg font-bold text-black">
        {stepNumber}
      </div>
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
        <Image alt={title} src={icon} width={20} height={20} />
      </div>
      <h3 className="font-bold text-base">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  const steps: Step[] = [
    {
      stepNumber: "01",
      title: "Subscribe",
      description:
        "Choose a plan that fits your needs. Cancel or pause anytime.",
      icon: IconShield,
    },
    {
      stepNumber: "02",
      title: "Send tasks in Slack",
      description:
        "Describe what you need in a message. No formal specs required.",
      icon: IconLightning,
    },
    {
      stepNumber: "03",
      title: "We build and iterate",
      description:
        "Our team develops your feature and shares progress updates in the same thread.",
      icon: IconRocket,
    },
    {
      stepNumber: "04",
      title: "You review and deploy",
      description:
        "Test the build, request changes if needed, then deploy when ready.",
      icon: IconUserPlus,
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-4 md:px-10 lg:px-30 items-center py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
      <p className="text-muted text-center max-w-[50ch] leading-relaxed">
        Four simple steps. No project managers, no long meetings, no chaos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1000px]">
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </div>
    </section>
  );
}
