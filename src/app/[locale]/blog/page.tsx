import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BlogIndex } from "@/components/blog/BlogIndex";
import {
  blogPosts,
  getBlogCategories,
  getFeaturedBlogPost,
  sortBlogPostsByDate,
} from "@/data/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    segment: "blog",
    title:
      locale === "fr"
        ? "Blog | Que Faire à Essaouira — Conseils & Guides Activités"
        : "Blog | Things to Do in Essaouira — Tips & Activity Guides",
    description:
      locale === "fr"
        ? "Découvrez nos articles et guides sur Essaouira : cheval, quad, surf, plages, luxe, couples. Conseils de locaux."
        : "Discover our articles and guides about Essaouira: horse, quad, surf, beaches, luxury, couples. Local tips.",
    keywords:
      locale === "fr"
        ? [
            "blog essaouira",
            "que faire essaouira",
            "guide essaouira",
            "horse riding essaouira blog",
            "surf essaouira",
          ]
        : [
            "essaouira blog",
            "things to do essaouira",
            "essaouira guide",
            "horse riding essaouira",
            "surf essaouira",
          ],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const sorted = sortBlogPostsByDate(blogPosts);
  const featured = getFeaturedBlogPost();
  const categories = getBlogCategories(typedLocale);

  return (
    <>
      <section className="border-b border-border bg-bg-card/40 py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <span className="eyebrow">{dict.blog.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {typedLocale === "fr"
                ? "Guides & conseils pour votre séjour"
                : "Guides & tips for your stay"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.blog.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <BlogIndex
        posts={sorted}
        locale={typedLocale}
        dict={dict}
        categories={categories}
        featured={featured}
      />
    </>
  );
}
