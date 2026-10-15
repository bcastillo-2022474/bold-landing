import Image from "next/image";
import { BookingModal } from "@/components/booking-modal";
import heroImage from "../../../public/Slack_MockUp.png";

export function IntroSection() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24">
      <div className="flex flex-col md:grid md:grid-cols-[45%_55%] items-center gap-10 md:gap-16">
        <div className="flex flex-col items-start gap-6">
          <p className="text-[#FFD200] font-semibold text-sm tracking-wide">
            Slack apps · AI agents · Workflows · Integrations · Workspace
            management
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span>Stop switching tools.</span>{" "}
            <span>
              Run your work in <span className="text-[#FFD200]">Slack.</span>
            </span>
          </h1>
          <p className="text-muted text-sm md:text-base leading-relaxed max-w-[50ch]">
            We bring your leads, payments, support and dev pipelines into the
            Slack workspace your team already uses. We build the Slack apps, AI
            agents, workflows and integrations, and keep your workspace clean.
            Built for startups, fintech and ecommerce teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <BookingModal
              variant="button"
              label="Book a 20-min fit call"
              style="black"
              className="justify-center"
            />
            <a
              href="#pricing"
              className="rounded-full px-5 py-2 text-sm md:text-base font-semibold border border-black/10 hover:border-black/30 text-center"
            >
              See the 10-day pilot
            </a>
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-[46ch]">
            Live in your Slack in 10 business days or your money back · Code in
            your GitHub · You own the IP · Overlap with US Eastern hours
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full rounded-[32px] border border-black/5 shadow-xl bg-white p-3 md:p-4">
            <Image
              src={heroImage}
              alt="Slack workspace where leads, payments, support and dev pipelines run in one place"
              priority
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
