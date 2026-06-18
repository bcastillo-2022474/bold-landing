import Image from "next/image";
import heroImage from "../../../public/Slack_MockUp.png";

export function IntroSection() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24">
      <div className="flex flex-col md:grid md:grid-cols-[45%_55%] items-center gap-10 md:gap-16">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span>Your Dedicated Dev Team.</span>{" "}
            <span>
              On Demand. <span className="text-[#FFD200]">On Slack.</span>
            </span>
          </h1>
          <p className="text-muted text-sm md:text-base leading-relaxed max-w-[50ch]">
            Build custom Slack apps, automate Slack workflows, and deploy AI
            Slack agents via monthly subscription. Send your requests directly
            in Slack — we build MVPs, internal tools, integrations, and
            automations. No hiring. No contracts.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full rounded-[32px] border border-black/5 shadow-xl bg-white p-3 md:p-4">
            <Image
              src={heroImage}
              alt="Bold Studio - AI Slack agent for your dedicated dev team on Slack"
              priority
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
