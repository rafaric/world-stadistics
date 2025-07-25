import { categories } from "./constants/constants";
import CategoryCard from "./components/CategoryCard";

export default function Home() {
  return (
    <main className="px-4 2xl:py-10 mx-auto flex flex-col items-center h-fit">
      <div className="p-6 space-y-6">
        <p className="text-muted-foreground">
          Explorá dashboards temáticos por categorías
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.title}
              {...category}
              className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${
                i * 100
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
