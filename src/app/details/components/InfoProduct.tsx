import Product from "@/app/models/Product";
import { useState } from "react";

export default function InfoProduct({product}: {product: Product}) {
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold text-red-600 mr-2">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-gray-500 line-through mr-2">
          ${product.originalPrice.toFixed(2)}
        </span>
        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {product.discount}
        </span>
      </div>
      <div className="mb-4">
        <p className="font-semibold mb-2">Color: {product.color}</p>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-beige border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-blue-200 border-2 border-gray-300"></button>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold mb-2">Size: {selectedSize}</p>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
