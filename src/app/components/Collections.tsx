import Image from "next/image";

export default function Collections() {
  return (
    <section className="p-8">
        <h3 className="text-2xl font-bold mb-6">Season Collection</h3>
        <div className="grid grid-cols-6 gap-4">
          {["Women's", "Men's", "Jewelry", "Sneakers", "Bags", "Glasses"].map(
            (category) => (
              <div key={category} className="text-center">
                <Image
                  src="https://images.asos-media.com/products/gorra-en-tonos-blanco-hueso-con-logo-de-los-ny-yankees-9forty-de-new-era/23339923-1-offwhite?$n_320w$&wid=317&fit=constrain"
                  alt={category}
                  className=" rounded-full mx-auto mb-2"
                  width={200}
                  height={200}
                />
                <p className="text-lg font-bold">{category}</p>
                <p>10 items</p>
              </div>
            )
          )}
        </div>
      </section>
  )}