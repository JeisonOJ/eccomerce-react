export default function BrandLogos() {
  return (
    <section className="flex flex-wrap justify-between items-center p-8 border-t border-b border-gray-200">
        {["SSENSE", "BURBERRY", "NIKE", "ASOS", "PULL&BEAR", "GILDAN"].map(
          (brand) => (
            <div
              key={brand}
              className="w-1/2 sm:w-1/3 md:w-1/6 text-center mb-4 md:mb-0"
            >
              <h5 className="font-bold">{brand}</h5>
            </div>
          )
        )}
      </section>
  )}