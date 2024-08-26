import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex p-8 bg-gray-100">
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-4">Summer Escapades</h2>
          <p className="mb-4">
            Embrace the sun-kissed season with our collection of breezy summer
            essentials.
          </p>
          <Link href="/details" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Shop collection details
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="https://images.asos-media.com/products/gorra-verde-claro-9forty-la-de-new-era/204058714-3?$n_320w$&wid=317&fit=constrain"
            alt="Woman with hat"
            width={400}
            height={400}
          />
        </div>
      </section>

      {/* Category Section */}
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
                  width={100}
                  height={100}
                />
                <p>{category}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Product Listings */}
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

      {/* Promotional Banners */}
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

      {/* Features */}
      <section className="flex flex-wrap justify-between p-8 bg-gray-100">
        {[
          "Free Shipping",
          "Flexible Payment",
          "14 Day Returns",
          "Customer Support",
        ].map((feature) => (
          <div
            key={feature}
            className="w-full sm:w-1/2 md:w-1/4 text-center mb-4 md:mb-0"
          >
            <h5 className="font-bold mb-2">{feature}</h5>
            <p className="text-sm text-gray-600">Short description</p>
          </div>
        ))}
      </section>

      {/* Map */}

      <section className="relative p-8 ">
        <div className="relative w-full h-[450px] flex justify-center">
          <div
            className="relative w-full h-[450px] flex justify-center"
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369107.5366642906!2d-79.7076989920169!3d43.7177675396109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2sco!4v1724690181347!5m2!1ses-419!2sco" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            }}
          ></div>
          <div className="absolute bottom-20 left-10 bg-white flex flex-col justify-center items-center text-black p-4 w-[20%]">
            <h4 className="text-xl font-bold mb-2">Toronto Store</h4>
            <p className="mb-1">301 Front St W Toronto, Canada</p>
            <p className="mb-1">support@ecomus.com</p>
            <p className="mb-1">(08) 8942 1299</p>
            <p className="mb-1">Mon - Fri, 8:30am - 10:30pm</p>
            <p className="mb-1">Saturday, 8:30am - 10:30pm</p>
            <p>Sunday, Closed</p>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
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

      {/* Footer */}
      <footer className="bg-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">@ecomus</h4>
            <p className="mb-2">
              Address: 123 Fashion Street, Style City 12345
            </p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@ecomus.com</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Help</h5>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Shipping</p>
            <p>Returns</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">About us</h5>
            <p className="mb-2">Our Story</p>
            <p className="mb-2">Careers</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Sign Up for Email</h5>
            <p className="mb-4">
              Be the first to know about our special offers and new arrivals!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 border border-gray-300 rounded-l"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
