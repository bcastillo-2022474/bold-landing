import { NAVIGATION, SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="px-4 md:px-10 lg:px-30 w-full flex flex-col pt-16 pb-8">
      <div className="w-full text-muted pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-sm border-b border-black/5">
        <p className="max-w-[35ch] leading-relaxed">
          The Slack-native software factory for modern teams who want to build
          faster and scale smarter.
        </p>
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
      <div className="text-xs text-muted w-full pt-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <span>
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
