import Product from "@/app/models/Product";
import { useState } from "react";

export default function PaymentOptions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
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
      <div>
        <div className="flex items-center w-full mb-2 gap-4">
          <button className=" w-[80%] bg-black text-white py-3 ">
            Add to cart - ${(product.price * quantity).toFixed(2)}
          </button>
          <div className="flex gap-4 w-[20%] py-3 text-2xl">
            <button className="w-1/2 text-2xl border p-2">
              <i className="bx bx-heart text-2xl"></i>
            </button>
            <button className="w-1/2 text-2xl border p-2">
              <i className="bx bx-share-alt text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <button className="w-full bg-yellow-400 text-black py-3 mb-4">
        Buy with PayPal
      </button>

      <div className="border-t pt-4">
        <p className="text-sm text-gray-600 mb-2">
          Estimated delivery time: 12-26 days (International), 3-6 days (United
          States)
        </p>
        <p className="text-sm text-gray-600">
          Return within 30 days of purchase. Duties & taxes are non-refundable.
        </p>
      </div>
    </>
  );
}
