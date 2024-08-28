import Image from "next/image";

export default function PromotionalBanners() {
  return (
    <section className="flex flex-wrap justify-between p-8 w-full">
        {["Essential Basics", "Athleisure Wear", "Seasonal Favorites"].map(
          (promo) => (
            <div
              key={promo}
              className="w-full md:w-1/3 pr-4 mb-4 md:mb-0 relative flex justify-center"
            >
              <Image
                src="https://img.freepik.com/foto-gratis/hermosa-mujer-sensual-camisa-hombre_144627-3426.jpg?t=st=1724864816~exp=1724868416~hmac=27a06e2c97e17017d67a843e93480460d328eb38978d749f35a6f29be44d828a&w=740"
                alt={promo}
                width={300}
                height={600}
              />
              <div className="absolute bottom-6 flex flex-col justify-center items-center">
                <p>UP TO 30% OFF</p>
                <h4 className="text-xl font-bold mb-4">{promo}</h4>
                <button className="bg-white p-2 rounded">Shop now</button>
              </div>
            </div>
          )
        )}
      </section>
  )}