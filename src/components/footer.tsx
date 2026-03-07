import { NAVIGATION, SITE, SOCIAL } from "@/constants/site";

export function Footer() {
  return (
    <div className="px-4 md:px-10 w-full flex flex-col">
      <div className="w-full font-inter text-muted py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 text-sm md:text-base">
        <div className="px-0 md:px-20">
          The Slack-native software factory for modern teams who want to build
          faster and scale smarter.
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-10">
          <div>
            <ul className="flex flex-col gap-2">
              {NAVIGATION.footer.company.map((link) => (
                <li key={link.label} className="list-none">
                  <a className="hover:underline" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              {NAVIGATION.footer.legal.map((link) => (
                <li key={link.label} className="list-none">
                  <a className="hover:underline" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs md:text-sm border-t text-muted border-gray-200 w-full py-5 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <span>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
        <span>
          <a href={SOCIAL.linkedin} className="hover:underline">
            Linkedin
          </a>
        </span>
      </div>
    </div>
  );
}
