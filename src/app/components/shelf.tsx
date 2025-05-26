import Image from "next/image";

export type ShelfProps = {
  id: number;
  name: string;
  image: string;
  link: string;

};

export function Shelf({ items }: { items: ShelfProps[] }) {
  return (
    <div className="flex flex-wrap gap-4 ">
      {items.map((product) => (
        <a
          key={product.id}
          className="flex flex-col items-center text-center gap-2 hover:underline hover:underline-offset-4 w-[calc(50%-8px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-8px)] lg:w-[calc(20%-8px)]"
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg max-w-[200px] h-auto object-contain"
          />
          <span className="text-sm font-medium">{product.name}</span>
        </a>
      ))}
    </div>
  )
}
