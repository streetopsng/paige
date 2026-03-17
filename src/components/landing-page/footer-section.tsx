import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Products",
    links: [
      "Paige - Team Onboarding",
      "Paige Identity Framework",
      "Games",
      "Engagement Tools",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Contact Us",
      "The People Economics (Newsletter)",
      "Careers",
    ],
  },
  {
    title: "Legal",
    links: [
      "Terms of Use",
      "Privacy Policy",
      "Data Protection Policy",
      "Cookie Policy",
    ],
  },
];

const socialLinks = [
  { label: "X", href: "https://x.com/StreetOpsng" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/street_opsng/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/streetopsng",
    icon: Linkedin,
  },
];

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border   pt-10  md:pt-12">
      <div className="relative mx-auto">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4  md:gap-8 px-10">
          <div className="max-w-xs">
            <div>
              <p className="font-heading text-4xl leading-none text-primary">
                Paige
              </p>
              <p className="mt-1 font-body text-xs text-foreground/70">
                by StreetOps
              </p>
            </div>

            <p className="mt-5 font-mont text-sm leading-relaxed text-foreground/70">
              Paige is the team engagement intelligence platform helping
              organizations build high- performing, psychologically safe teams —
              one pulse check at a time.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    className="flex h-8 w-8 bg-[#302C28] dark:bg-[#302C28] items-center justify-center rounded-md   transition-colors 5"
                  >
                    {Icon ? (
                      <Icon className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <span className="text-[10px] font-semibold text-white">
                        X
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="font-mont">
              <h2 className=" text-sm font-semibold text-foreground">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className=" text-xs leading-relaxed text-foreground/65 transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=" pointer-events-none relative flex items-center justify-center  text-center lg:min-h-[50vh] min-h-[20vh]">
          <h1 className=" font-semibold lg:text-[25rem] text-[5rem] text-foreground/6  m-0 leading-[0.8] tracking-widest">
            Paige
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
