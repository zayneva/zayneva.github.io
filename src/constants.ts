import type { Props } from "astro";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/zayneva",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:zayneva@163.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;
