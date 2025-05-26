import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-center items-center">
      <div className="flex items-center gap-6">
        <Image
          src="/visa-logo.png"
          alt="Visa Logo"
          width={80}
          height={30}
        />
        <div className="w-px h-10 bg-gray-300" />
        <Image
          src="/corebiz-logo.png"
          alt="Corebiz Logo"
          width={120}
          height={40}
        />
      </div>
    </header>
  )
}