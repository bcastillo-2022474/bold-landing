import Link from "next/link";
import { SITE, CONTACT, ROUTES } from "@/constants/site";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="border-b border-border-light sticky top-0 bg-white z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-10 py-5 flex items-center justify-between">
          <Link href={ROUTES.home} className="font-bold text-xl hover:text-yellow-300 transition-colors">
            {SITE.name}
          </Link>
          <Link href={ROUTES.home} className="text-sm text-muted hover:text-black hover:underline">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-10 py-10 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="relative isolate inline-block">
            <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
            <span className="z-10 relative">Privacy Policy</span>
          </span>
        </h1>

        <p className="text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted mb-4">
              {SITE.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-muted mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
              <li>Personal Data: Name, email address, and contact information you provide</li>
              <li>Usage Data: Information about how you use our website and services</li>
              <li>Technical Data: IP address, browser type, and device information</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you updates and marketing communications (with your consent)</li>
              <li>Process your transactions</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate data</li>
              <li>The right to erase your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted">
              Email: <a href={`mailto:${CONTACT.privacy}`} className="underline hover:text-black">{CONTACT.privacy}</a>
            </p>
          </section>

          {/* Notice */}
          <div className="mt-12 p-6 bg-yellow-300/10 border-l-4 border-yellow-300 rounded">
            <p className="text-sm text-muted">
              <strong>Note:</strong> This is a template Privacy Policy. Please consult with a legal professional to ensure it meets your specific needs and complies with applicable laws in your jurisdiction.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
