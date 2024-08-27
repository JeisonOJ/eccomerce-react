"use client";

import Gallery from "./components/Gallery";
import InfoProduct from "./components/InfoProduct";
import PaymentOptions from "./components/PaymentOptions";
import PolicyPage from "./components/PolicyPage";

export default function Component() {
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
        <Gallery product={product} />
        <div className="md:w-1/2">
          <InfoProduct product={product} />
          <PaymentOptions product={product} />
        </div>
      </div>
      <PolicyPage />
    </div>
  );
}
