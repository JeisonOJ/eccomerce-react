export default function Footer() {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">@ecomus</h4>
          <p className="mb-2">Address: 123 Fashion Street, Style City 12345</p>
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
  );
}
