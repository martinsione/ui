"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge as cn } from "tailwind-merge";

export type Navigation = {
  title: string;
  links: { title: string; href: string }[];
}[];

export function Sidebar({ navigation }: { navigation: Navigation }) {
  const pathname = usePathname();

  return (
    <nav className="text-base lg:text-sm">
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-medium text-geist-foreground">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l border-geist-accents-2 lg:mt-4 lg:space-y-4"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-6 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                      link.href === pathname
                        ? "font-semibold text-geist-accents-7 before:bg-geist-foreground"
                        : "text-geist-accents-5 hover:text-geist-accents-6 hover:before:block"
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
