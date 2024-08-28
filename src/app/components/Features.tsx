export default function Features() {
  return (
    <section className="flex flex-wrap p-8 w-full justify-center items-center bg-gray-100">
      <div className="flex flex-wrap p-8 w-full justify-center items-center bg-gray-100">
        {[
          "Free Shipping",
          "Flexible Payment",
          "14 Day Returns",
          "Customer Support",
        ].map((feature) => (
          <div key={feature} className="w-1/4 flex">
            <button className="bg-white rounded-full flex items-center w-[80px] h-[80px] justify-center border border-gray-300 shadow-sm">
            <i className='bx bx-package text-3xl'></i>
            </button>
            <div className="flex flex-col justify-center ml-4">
              <h5 className="font-bold mb-2">{feature}</h5>
              <p className="text-sm text-gray-600">Short description</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
