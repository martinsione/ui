import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { Mdx } from "@/app/_components/mdx";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/") ?? "";
  const page = allPages.find((page) => page.slug === slug) ?? null;
  return page;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Docs({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="prose max-w-none dark:prose-invert">
      <h1 className="mb-2">{page.title}</h1>
      {page?.description && <p>{page.description}</p>}
      <hr className="my-8" />
      <Mdx code={page.body.code} />
    </article>
  );
}
