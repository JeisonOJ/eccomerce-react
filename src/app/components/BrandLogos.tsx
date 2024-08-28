export default function BrandLogos() {
  return (
    <section className="flex flex-wrap justify-between items-center p-8  border-gray-200">
        {["SSENSE", "BURBERRY", "NIKE", "ASOS", "PULL&BEAR", "GILDAN"].map(
          (brand) => (
            <div
              key={brand}
              className="w-1/6 border border-gray-200 p-4 h-[100px] flex justify-center items-center"
            >
              <h5 className="font-bold">{brand}</h5>
            </div>
          )
        )}
      </section>
  )}