import { type Navigation, Sidebar } from "./components/sidebar";

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
      { title: "Input", href: "/docs/input" },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-7xl px-4 py-16">
      <aside className="fixed hidden h-[calc(100vh-2rem)] w-[290px] flex-col overflow-y-auto overflow-x-hidden lg:flex">
        <Sidebar navigation={navigation} />
      </aside>
      <div className="lg:ml-[300px]">{children}</div>
    </div>
  );
}
