import { categories } from "./constants/constants";
import CategoryCard from "./components/CategoryCard";
import Script from "next/script";

const SITE_URL = "https://world-stadistics.vercel.app";
const SITE_NAME = "World Estadísticas";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Explorá indicadores mundiales del Banco Mundial con visualizaciones interactivas por país y categoría.",
  author: {
    "@type": "Person",
    name: "Rafael Strongoli",
  },
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/dashboard/{category}`,
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="px-4 2xl:py-10 mx-auto flex flex-col items-center h-fit">
        <div className="p-6 space-y-6">
          <p className="text-muted-foreground">
            Explorá dashboards temáticos por categorías
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, i) => (
              <CategoryCard
                key={category.title}
                {...category}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
