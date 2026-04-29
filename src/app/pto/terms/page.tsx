import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service - PTO & Handover",
  description:
    "Terms of Service for PTO & Handover - Read our terms and conditions.",
  alternates: {
    canonical: "/pto/terms",
  },
  robots: META.robots,
};

export default function PTOTermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-10 max-w-4xl mx-auto">
        <section className="flex flex-col items-center py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span className="relative isolate">
              <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
              <span className="z-10 relative">Terms of Service</span>
            </span>
          </h1>
          <p className="text-center font-inter text-muted text-lg">PTO & Handover</p>
        </section>

        <section className="px-4 md:px-10 pb-20 w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p className="text-muted">
              By accessing or using PTO & Handover ("the Service"), you agree to be bound by these Terms of Service.
              If you do not agree, you may not use the Service.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">2. Description of the Service</h2>
            <p className="text-muted">
              PTO & Handover is a productivity tool designed to help teams manage time off (PTO) and coordinate work transitions.
              The Service is primarily delivered as a native integration within Slack and connects with third-party calendar providers such as Google Calendar and Microsoft Outlook.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">3. User Accounts</h2>
            <p className="text-muted">
              To use the Service, users may be required to authenticate through third-party providers, including Slack, Google, or Microsoft.
            </p>
            <p className="text-muted font-semibold">You are responsible for:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Maintaining the security of your account</li>
              <li>All activity conducted under your account</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">4. Use of Third-Party Integrations</h2>
            <p className="text-muted font-semibold">Calendar Providers</p>
            <p className="text-muted">The Service interacts with calendar services to:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Read availability</li>
              <li>Create and manage PTO-related events</li>
            </ul>
            <p className="text-muted mt-2">
              By using the Service, you authorize PTO & Handover to access your calendar data as permitted by you.
              This includes integrations with:
            </p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Google Calendar</li>
              <li>Microsoft Outlook</li>
            </ul>
            <p className="text-muted font-semibold mt-4">Slack Integration</p>
            <p className="text-muted">
              The Service operates as an application within Slack and may:
            </p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Send messages or notifications</li>
              <li>Trigger workflows</li>
              <li>Interact with Slack channels and users</li>
            </ul>
            <p className="text-muted mt-2">
              Use of the Service is also subject to Slack's applicable terms and policies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">5. Acceptable Use</h2>
            <p className="text-muted">You agree not to:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Use the Service for unlawful purposes</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Abuse integrations or APIs (including excessive requests)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">6. Data and Privacy</h2>
            <p className="text-muted">
              Your use of the Service is governed by our Privacy Policy.
              We only access and use data necessary to provide core functionality related to PTO scheduling, calendar coordination, and workflow automation within Slack.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">7. Third-Party Services</h2>
            <p className="text-muted">The Service depends on third-party platforms, including:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Slack</li>
              <li>Google Calendar</li>
              <li>Microsoft Outlook</li>
            </ul>
            <p className="text-muted font-semibold mt-2">We are not responsible for:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Service interruptions or outages</li>
              <li>Changes to APIs or platform functionality</li>
              <li>Data handling practices of third-party providers</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">8. Service Availability</h2>
            <p className="text-muted">
              We do not guarantee uninterrupted or error-free operation.
              The Service may be modified, suspended, or discontinued at any time.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">9. Limitation of Liability</h2>
            <p className="text-muted">To the maximum extent permitted by law, PTO & Handover shall not be liable for:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>Data loss</li>
              <li>Scheduling conflicts</li>
              <li>Missed PTO events</li>
              <li>Workflow or notification failures</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">10. Disclaimer</h2>
            <p className="text-muted">
              The Service is provided "as is" without warranties of any kind.
            </p>
            <p className="text-muted font-semibold mt-2">We do not guarantee that:</p>
            <ul className="text-muted list-disc list-inside flex flex-col gap-2 ml-4">
              <li>The Service will meet all requirements</li>
              <li>Calendar data will always be accurate or up-to-date</li>
              <li>Slack or third-party integrations will function without interruption</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">11. Termination</h2>
            <p className="text-muted">
              We reserve the right to suspend or terminate access to the Service at any time for violations of these Terms.
              Users may discontinue use at any time.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">12. Changes to Terms</h2>
            <p className="text-muted">
              We may update these Terms periodically.
              Continued use of the Service constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">13. Governing Law</h2>
            <p className="text-muted">
              These Terms shall be governed by the laws of your operating jurisdiction.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">14. Contact</h2>
            <p className="text-muted">For questions regarding these Terms, contact:</p>
            <p className="text-black font-semibold">rqueche@getboldstudios.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}