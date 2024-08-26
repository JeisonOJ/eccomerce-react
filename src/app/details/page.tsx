"use client";
import Image from "next/image";
import { useState } from "react";

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  const product = {
    name: "Cotton jersey top",
    price: 8.0,
    originalPrice: 10.0,
    discount: "20% OFF",
    color: "Beige",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain",
      "https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain",
      "https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain",
      "https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain",
      "https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain",
      "https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={300}
            />
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2">
              <div className="h-6 w-6">izquierda</div>
            </button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2">
              <div className="h-6 w-6">derecha</div>
            </button>
          </div>
          <div className="grid grid-cols-6 gap-2 mt-4">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
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
          <div className="mb-4">
            <p className="font-semibold mb-2">Quantity</p>
            <div className="flex items-center">
              <button
                className="px-4 py-2 border"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 border-t border-b">{quantity}</span>
              <button
                className="px-4 py-2 border"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 mb-4">
            Add to cart - ${(product.price * quantity).toFixed(2)}
          </button>
          <button className="w-full bg-yellow-400 text-black py-3 mb-4">
            Buy with PayPal
          </button>
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center gap-2">
              <div className="h-5 w-5">Share</div>
            </button>
            <button className="flex items-center gap-2">
              <div className="h-5 w-5">Add to wishlist</div>
            </button>
          </div>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">
              Estimated delivery time: 12-26 days (International), 3-6 days
              (United States)
            </p>
            <p className="text-sm text-gray-600">
              Return within 30 days of purchase. Duties & taxes are
              non-refundable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
