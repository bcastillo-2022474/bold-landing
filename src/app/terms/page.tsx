import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, META, ROUTES, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: META.pages.terms.title,
  description: META.pages.terms.description,
  alternates: {
    canonical: META.pages.terms.canonical,
  },
  robots: META.robots,
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="border-b border-border-light sticky top-0 bg-white z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-10 py-5 flex items-center justify-between">
          <Link
            href={ROUTES.home}
            className="font-bold text-xl hover:text-yellow-300 transition-colors"
          >
            {SITE.name}
          </Link>
          <Link
            href={ROUTES.home}
            className="text-sm text-muted hover:text-black hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-10 py-10 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="relative isolate inline-block">
            <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
            <span className="z-10 relative">Terms of Service</span>
          </span>
        </h1>

        <p className="text-muted mb-8">Last updated: {META.pages.terms.lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted mb-4">
              These Terms of Service constitute a legally binding agreement
              between you and {SITE.name} ("Company," "we," "us," or "our")
              concerning your access to and use of our website and services.
            </p>
            <p className="text-muted mb-4">
              By accessing or using our services, you agree to be bound by these
              Terms. If you do not agree to these Terms, you may not access or
              use our services.
            </p>
          </section>

          {/* Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-muted mb-4">
              {SITE.name} provides custom Slack application development and
              automation services through a subscription-based model. Our
              services include:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
              <li>Custom Slack app development</li>
              <li>Workflow automation solutions</li>
              <li>Integration with third-party services</li>
              <li>Ongoing maintenance and support</li>
              <li>Feature updates and improvements</li>
            </ul>
          </section>

          {/* Subscription Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Subscription Terms</h2>
            <p className="text-muted mb-4">
              Our services are offered on a subscription basis:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
              <li>Subscriptions are billed monthly in advance</li>
              <li>You may cancel or pause your subscription at any time</li>
              <li>
                Cancellations take effect at the end of the current billing
                period
              </li>
              <li>No refunds are provided for partial months</li>
              <li>Pricing is subject to change with 30 days notice</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>
                Not use our services for any illegal or unauthorized purpose
              </li>
              <li>Not attempt to interfere with or disrupt our services</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted mb-4">
              The services, including all content, features, and functionality,
              are owned by {SITE.name} and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-muted mb-4">
              Custom applications developed for you remain your property,
              subject to our retention of underlying framework and reusable
              components.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted mb-4">
              To the maximum extent permitted by law, {SITE.name} shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted mb-4">
              We reserve the right to terminate or suspend your access to our
              services immediately, without prior notice or liability, for any
              reason, including breach of these Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted mb-4">
              If you have questions about these Terms of Service, please contact
              us at:
            </p>
            <p className="text-muted">
              Email:{" "}
              <a
                href={`mailto:${CONTACT.legal}`}
                className="underline hover:text-black"
              >
                {CONTACT.legal}
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
