import Image from "next/image";

export default function Home() {
  const brindes = [
    {
      id: 1,
      name: "Self Ring Light",
      image: "/image001.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=10&qty=1&seller=1&sc=1",
    },
    {
      id: 2,
      name: "Porta Cartão RFID",
      image: "/image002.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=11&qty=1&seller=1&sc=1",
    },
    {
      id: 3,
      name: "Caneca Inox",
      image: "/image003.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=14&qty=1&seller=1&sc=1",
    },
    {
      id: 4,
      name: "Estojo",
      image: "/image004.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=15&qty=1&seller=1&sc=1",
    },
    {
      id: 5,
      name: "Kit Viagem",
      image: "/image005.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=16&qty=1&seller=1&sc=1",
    },
  ];

  const produtos = [
    {
      id: 1,
      name: "Borracha",
      image: "/borracha.webp",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=5&qty=1&seller=1&sc=1",
    },
    {
      id: 2,
      name: "Caneta",
      image: "/caneta-azul.jpg",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=2&qty=1&seller=1&sc=1",
    },
    {
      id: 3,
      name: "Caneta Hidrográfica",
      image: "/caneta.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=7&qty=1&seller=1&sc=1",
    },
    {
      id: 4,
      name: "Estojo",
      image: "/estojo.png",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=6&qty=1&seller=1&sc=1",
    },
    {
      id: 5,
      name: "Lapiseira",
      image: "/lapiseira.jpg",
      link: "https://cybersourcepartnerbr.myvtex.com/checkout/cart/add/?sku=3&qty=1&seller=1&sc=1",
    },
  ];

  return (
    <div className="p-4 space-y-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {brindes.map((product) => (
          <a
            key={product.id}
            className="flex flex-col items-center text-center gap-2 hover:underline hover:underline-offset-4"
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

      <div className="w-full h-px bg-gray-300" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {produtos.map((product) => (
          <a
            key={product.id}
            className="flex flex-col items-center text-center gap-2 hover:underline hover:underline-offset-4"
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
    </div>
  );
}
