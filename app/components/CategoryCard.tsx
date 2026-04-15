"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  href: string;
  description: string;
  delay?: number;
}
const CategoryCard = ({
  title,
  image,
  href,
  description,
  delay = 0,
  className,
}: Props & { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Link href={href} className="block h-full">
        <Card
          className={`min-h-64 h-full cursor-pointer transition-shadow duration-200
      hover:shadow-lg ${className}`}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="w-full h-40 relative rounded-md overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={delay === 0}
              />
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
export default CategoryCard;
