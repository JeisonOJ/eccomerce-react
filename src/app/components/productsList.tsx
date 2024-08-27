import Image from "next/image";

export default function ProductsList() {
  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Best seller</h3>
        <div>
          <button className="mr-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            New arrivals
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            On Sale
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded">
            <Image
              src="https://images.asos-media.com/products/top-amplio-de-manga-larga-con-estampado-de-serpiente-y-lazadas-de-asos-design/206949843-2?$n_320w$&wid=317&fit=constrain"
              alt={`Product ${index + 1}`}
              className="w-full h-auto mb-4"
              width={200}
              height={200}
            />
            <h4 className="font-bold mb-2">Product Name</h4>
            <p className="text-gray-600">$99.99</p>
          </div>
        ))}
      </div>
      <button className="block mx-auto mt-8 px-6 py-2 border border-gray-300 rounded hover:bg-gray-100">
        Load more
      </button>
    </section>
  );
}
