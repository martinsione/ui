import { type Navigation, Sidebar } from "@/app/_components/sidebar";
import { ThemeToggle } from "@/app/_components/theme-toggle";

const navigation: Navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/docs" },
      // { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Badge", href: "/docs/badge" },
      { title: "Button", href: "/docs/button" },
      { title: "Input", href: "/docs/input" },
      { title: "Select", href: "/docs/select" },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex max-w-6xl px-4 lg:px-8">
      <div className="top-0 hidden h-screen w-[240px] overflow-y-auto overflow-x-hidden py-16 lg:sticky lg:block">
        <div className="mb-8 flex justify-between">
          <span className="text-xl font-medium tracking-tighter">Geist UI</span>
          <ThemeToggle />
        </div>
        <Sidebar navigation={navigation} />
      </div>
      <div className="flex-auto py-16 lg:pl-12">{children}</div>
    </div>
  );
}
