import Image from "next/image";

export default function PromotionalBanners() {
  return (
    <section className="flex flex-wrap justify-between p-8">
        {["Essential Basics", "Athleisure Wear", "Seasonal Favorites"].map(
          (promo) => (
            <div
              key={promo}
              className="w-full md:w-1/3 pr-4 mb-4 md:mb-0 relative"
            >
              <Image
                src="https://images.asos-media.com/products/vestido-corto-negro-extragrande-con-cuello-barco-de-punto-de-miss-selfridge/206336578-1-black?$n_320w$&wid=317&fit=constrain"
                alt={promo}
                width={300}
                height={200}
              />
              <div className="absolute bottom-4 left-4 ">
                <h4 className="text-xl font-bold mb-2">{promo}</h4>
                <p className="underline">Shop now</p>
              </div>
            </div>
          )
        )}
      </section>
  )}