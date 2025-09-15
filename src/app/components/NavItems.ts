import { usePathname } from "next/navigation"

export const NavItems = () => {
  const pathName = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    { name: "Home", href: "/", active: pathName === "/" },
    { name: "Projects", href: "/work", active: isNavItemActive(pathName, "work") },
    { name: "Notes", href: "/notes", active: isNavItemActive(pathName, "notes") },
  ];
};