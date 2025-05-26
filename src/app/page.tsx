import Header from "./components/header";
import { Shelf, ShelfProps } from "./components/shelf";

export default function Home() {
  const brindes: ShelfProps[] = [
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
    <>
      <Header />
      <div className="p-4 space-y-8">
        <Shelf items={brindes} />
        <div className="w-full h-px bg-gray-300" />
        <Shelf items={produtos} />
      </div>
    </>

  );
}
