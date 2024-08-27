import Product from "@/app/models/Product";
import Image from "next/image";

export default function Gallery({ product }: { product: Product }) {
  return (
    <div className="flex min-h-4">
      <div className="flex flex-col gap-2 mb-4">
        {product.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${product.name} ${index + 1}`}
            width={78}
            height={70}
          />
        ))}
      </div>

      <div className="relative ml-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={100}
        />
        <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-3 font-bold">
          <div className="h-6 w-6">&lt;</div>
        </button>
        <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-3 font-bold">
          <div className="h-6 w-6">&gt;</div>
        </button>
      </div>
    </div>
  );
}
