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
      "The People Economics Newsletter",
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
  { label: "X", href: "#" },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Email", href: "#", icon: Mail },
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

            <p className="mt-5 font-body text-sm leading-relaxed text-foreground/70">
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
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-inverse text-inverse-foreground transition-colors hover:bg-inverse/85"
                  >
                    {Icon ? (
                      <Icon className="h-3.5 w-3.5" />
                    ) : (
                      <span className="text-[10px] font-semibold">X</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="font-body text-sm font-semibold text-foreground">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs leading-relaxed text-foreground/65 transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=" pointer-events-none relative  text-center h-[50vh] ">
          <h1 className="overflow-hidden font-semibold lg:text-[20rem] text-[10rem] text-foreground/6 ">
            Paige
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
