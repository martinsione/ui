import { type Navigation, Sidebar } from "../../components/sidebar";
import { ThemeToggle } from "../../components/theme-toggle";

const navigation: Navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Avatar", href: "/docs/avatar" },
      { title: "Badge", href: "/docs/badge" },
      { title: "Button", href: "/docs/button" },
      { title: "Checkbox", href: "/docs/checkbox" },
      { title: "Error", href: "/docs/error" },
      { title: "Input", href: "/docs/input" },
      { title: "Select", href: "/docs/select" },
      { title: "Textarea", href: "/docs/textarea" },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-7xl px-4 py-16">
      <aside className="fixed hidden h-[calc(100vh-2rem)] w-[240px] flex-col overflow-y-auto overflow-x-hidden lg:flex">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xl font-medium tracking-tighter">Geist UI</span>
          <ThemeToggle />
        </div>
        <Sidebar navigation={navigation} />
      </aside>
      <div className="lg:ml-[300px]">{children}</div>
    </div>
  );
}
