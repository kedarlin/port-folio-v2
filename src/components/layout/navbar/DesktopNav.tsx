import { siteConfig } from "@/config/site";

import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {siteConfig.navigation.map((item) => (
        <NavItem key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}
