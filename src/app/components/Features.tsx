export default function Features() {
  return (
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
  )}