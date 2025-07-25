"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

interface Props {
  title: string;
  image: string;
  href: string;
  description: string;
}
const CategoryCard = ({
  title,
  image,
  href,
  description,
  className,
}: Props & { className?: string }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      scale={1.02}
      transitionSpeed={1000}
    >
      <Link href={href}>
        <Card
          className={`min-h-64 cursor-pointer transition-transform
      hover:scale-[1.03] hover:shadow-md ${className}`}
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
                className="object-cover"
                priority
              />
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </Tilt>
  );
};
export default CategoryCard;
