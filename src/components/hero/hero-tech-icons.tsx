import Image from "next/image";

import { cn } from "@/lib/utils";

type TechIcon = {
  name: string;
  src: string;
  className: string;
  imageClassName?: string;
};

const techIcons: TechIcon[] = [
  {
    name: "React",
    src: "/images/logos/tech/react.svg",
    className: "-left-16 top-5",
  },
  {
    name: "TypeScript",
    src: "/images/logos/tech/typescript.svg",
    className: "-right-14 top-1",
  },
  {
    name: "PostgreSQL",
    src: "/images/logos/tech/postgresql.svg",
    className: "-right-18 top-28",
  },
  {
    name: "Python",
    src: "/images/logos/tech/python.svg",
    className: "-left-18 bottom-28",
  },
  {
    name: "Node.js",
    src: "/images/logos/tech/nodejs.svg",
    className: "-right-15 bottom-20",
  },
  {
    name: "Angular",
    src: "/images/logos/tech/angular.svg",
    className: "-left-12 top-31",
  },
  {
    name: "Go",
    src: "/images/logos/tech/go.svg",
    className: "right-6 -bottom-15",
    imageClassName: "max-w-10 xl:max-w-12",
  },
  {
    name: "PHP",
    src: "/images/logos/tech/php.svg",
    className: "left-12 -bottom-14",
    imageClassName: "max-w-10 xl:max-w-12",
  },
];

export function HeroTechIcons() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
      {techIcons.map((item) => (
        <div
          className={cn(
            "absolute grid size-10 place-items-center rounded-3xl border border-border/80 bg-card/95 shadow-xl shadow-foreground/7 backdrop-blur-xl grayscale xl:size-12",
            item.className,
          )}
          data-hero-tech-icon
          key={item.name}
        >
          <Image
            alt=""
            aria-hidden="true"
            className={cn(
              "h-auto max-h-8 w-auto max-w-9 select-none object-contain xl:max-h-9 xl:max-w-10",
              item.imageClassName,
            )}
            draggable={false}
            height={48}
            src={item.src}
            width={48}
          />
        </div>
      ))}
    </div>
  );
}
