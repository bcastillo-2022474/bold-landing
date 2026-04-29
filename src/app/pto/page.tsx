import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BookingModal } from "@/components/booking-modal";
import { META } from "@/constants/site";
import PTOIcon from "../../../public/icons/pto-sun.png";

export const metadata: Metadata = {
  title: "PTO & Handover - Bold Studio",
  description:
    "PTO & Handover management tool built by Bold Studio - manage time off and team handovers directly in Slack.",
  alternates: {
    canonical: "/pto",
  },
  robots: META.robots,
};

export default function PTOPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-10">
        <section className="flex flex-col items-center py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30">
          <Image
            src={PTOIcon}
            alt="PTO & Handover"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span className="relative isolate">
              <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
              <span className="z-10 relative">PTO & Handover</span>
            </span>
          </h1>
          <p className="text-center font-inter text-muted items-center max-w-[65ch] px-4 text-base md:text-lg">
            The complete time-off management app that lives inside your Slack
            workspace. Request vacations, early outs, or sick days — and get
            instant handover context when you return.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 w-full items-center bg-section-bg">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1000px]">
            <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow">
              <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-lg">Request time off</h3>
              <p className="text-muted text-sm">
                Type /pto request followed by your dates — like "/pto request
                Monday off" or "/pto request sick day tomorrow". The app
                instantly creates your request.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow">
              <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-lg">Manager approval</h3>
              <p className="text-muted text-sm">
                Your manager gets a notification instantly. They can approve,
                deny, or reply to ask for more context — all without leaving
                Slack.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow">
              <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-lg">Smart handovers</h3>
              <p className="text-muted text-sm">
                When you're out, your manager can ask for a handover summary. The
                app reads your messages, tasks, and activity to generate a clear
                summary of what you're working on.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 w-full items-center">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold text-center">
            What you can do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[800px]">
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-light">
              <div className="w-2 h-2 rounded-full bg-yellow-300 shrink-0 mt-2"></div>
              <div>
                <h3 className="font-bold text-base">Request any type of time off</h3>
                <p className="text-muted text-sm mt-1">
                  Vacations, mental health days, early outs, sick days — just
                  describe what you need in plain text.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-light">
              <div className="w-2 h-2 rounded-full bg-yellow-300 shrink-0 mt-2"></div>
              <div>
                <h3 className="font-bold text-base">Get handover context</h3>
                <p className="text-muted text-sm mt-1">
                  When you return, ask for a summary of what happened while you
                  were away — mentions, decisions, tasks assigned to you.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-light">
              <div className="w-2 h-2 rounded-full bg-yellow-300 shrink-0 mt-2"></div>
              <div>
                <h3 className="font-bold text-base">Manager handover requests</h3>
                <p className="text-muted text-sm mt-1">
                  Your manager can request a handover before you go or while
                  you're away — the app summarizes your pending work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-light">
              <div className="w-2 h-2 rounded-full bg-yellow-300 shrink-0 mt-2"></div>
              <div>
                <h3 className="font-bold text-base">Calendar sync</h3>
                <p className="text-muted text-sm mt-1">
                  Connects with Google Calendar and Outlook via OAuth to know
                  your availability and meeting schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 w-full items-center bg-section-bg">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold text-center">
            Built for modern teams
          </h2>
          <p className="text-muted text-center max-w-[60ch]">
            Perfect for startups, fintech, and ecommerce companies that already
            live in Slack and want a simple way to manage time off without
            extra tools or paperwork.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full px-5 py-2 border border-muted/30 bg-white text-sm">
              No extra logins needed
            </span>
            <span className="rounded-full px-5 py-2 border border-muted/30 bg-white text-sm">
              Works in Slack
            </span>
            <span className="rounded-full px-5 py-2 border border-muted/30 bg-white text-sm">
              AI-powered summaries
            </span>
            <span className="rounded-full px-5 py-2 border border-muted/30 bg-white text-sm">
              Calendar integration
            </span>
          </div>
        </section>

        <section className="py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30 bg-section-bg flex flex-col items-center">
          <div className="bg-black rounded-2xl md:rounded-3xl w-full md:w-4/5 flex flex-col md:aspect-1024/380 relative isolate justify-center items-center p-8 md:p-10 text-center gap-5">
            <div className="absolute w-1/4 aspect-square rounded-3xl bg-yellow-300/25 blur-[100px] right-0 top-0"></div>
            <h2 className="max-w-[25ch] text-3xl md:text-4xl lg:text-5xl font-bold text-white z-10">
              Want to try PTO & Handover in your team?
            </h2>
            <p className="text-gray-400 max-w-[40ch] z-10">
              Get in touch and we'll set up a demo for your workspace.
            </p>
            <BookingModal variant="button" label="Request a demo" style="yellow" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}