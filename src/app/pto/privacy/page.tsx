import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy - PTO & Handover",
  description:
    "Privacy Policy for PTO & Handover - Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "/pto/privacy",
  },
  robots: META.robots,
};

export default function PTOPrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-10 max-w-4xl mx-auto">
        <section className="flex flex-col items-center py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span className="relative isolate">
              <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
              <span className="z-10 relative">Privacy Policy</span>
            </span>
          </h1>
          <p className="text-center font-inter text-muted text-lg">PTO & Handover</p>
        </section>

        <section className="px-4 md:px-10 pb-20 w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">1. Overview</h2>
            <p className="text-muted">
              PTO & Handover is a productivity tool designed to help teams manage
              time off (PTO) and ensure smooth work transitions by integrating
              with calendar services such as Google Calendar.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">2. Information We Collect</h2>
            <p className="text-muted">We collect only the minimum data necessary to provide our service:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2">
              <li>Basic account information (name, email address)</li>
              <li>Calendar data, including:</li>
              <ul className="list-disc list-inside ml-4">
                <li>Events</li>
                <li>Availability</li>
                <li>Event metadata (timestamps, IDs)</li>
              </ul>
            </ul>
            <p className="text-muted">We do not access or process calendar data unrelated to PTO or scheduling needs.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">3. How We Use Information</h2>
            <p className="text-muted">We use the collected data strictly to provide core functionality:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2">
              <li>Create and manage PTO events in user calendars</li>
              <li>Read calendar availability to avoid scheduling conflicts</li>
              <li>Generate handover workflows before time off</li>
              <li>Coordinate team schedules</li>
            </ul>
            <p className="text-muted font-semibold">We do not use Google Calendar data for:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Advertising</li>
              <li>Marketing</li>
              <li>Selling data</li>
              <li>Training external AI models</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">4. Google API Data Usage</h2>
            <p className="text-muted">
              Our application uses Google Calendar APIs to enable calendar-based features.
            </p>
            <p className="text-muted">
              The use of information received from Google APIs will adhere to the Google
              API Services User Data Policy, including the Limited Use requirements.
            </p>
            <p className="text-muted">We only access the scopes explicitly authorized by the user:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Read calendar data</li>
              <li>Create and update calendar events</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">5. Data Sharing</h2>
            <p className="text-muted">We do not sell or share user data with third parties.</p>
            <p className="text-muted">We may share limited data only when necessary with:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Infrastructure providers (e.g., hosting services)</li>
              <li>Internal systems required to operate the application</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">6. Data Retention</h2>
            <p className="text-muted">We retain user data only as long as necessary to provide the service.</p>
            <p className="text-muted">Users can request deletion of their data at any time.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">7. Data Security</h2>
            <p className="text-muted">We implement appropriate security measures, including:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Encryption in transit</li>
              <li>Access controls</li>
              <li>Secure storage practices</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">8. User Rights</h2>
            <p className="text-muted">Users have the right to:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Access their data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">9. Contact</h2>
            <p className="text-muted">For privacy-related questions, contact:</p>
            <p className="text-black font-semibold">rqueche@getboldstudios.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}