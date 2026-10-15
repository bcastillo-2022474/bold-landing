import { CONTACT, NAVIGATION, SITE, SOCIAL } from "@/constants/site";

export function Footer() {
  return (
    <footer className="px-4 md:px-10 lg:px-30 w-full flex flex-col pt-16 pb-8">
      <div className="w-full text-muted pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-sm border-b border-black/5">
        <div className="flex flex-col gap-4 max-w-[42ch]">
          <p className="leading-relaxed">
            Bold Studio builds Slack apps, AI agents, workflows and integrations
            so your team can work in one place. Based in Guatemala, working US
            Eastern hours.
          </p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <a
              className="hover:text-black transition-colors"
              href={`mailto:${CONTACT.general}`}
            >
              {CONTACT.general}
            </a>
            <a
              className="hover:text-black transition-colors"
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-black uppercase tracking-wider">
              Company
            </span>
            <ul className="flex flex-col gap-2.5">
              {NAVIGATION.footer.company.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-black transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-black uppercase tracking-wider">
              Legal
            </span>
            <ul className="flex flex-col gap-2.5">
              {NAVIGATION.footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-black transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs text-muted w-full pt-6 flex flex-col gap-3">
        <p className="leading-relaxed max-w-[78ch]">
          Slack is a trademark of Slack Technologies, LLC. Bold Studio is an
          independent company and is not affiliated with or endorsed by Slack.
        </p>
        <span>
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
