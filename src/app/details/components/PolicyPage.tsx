export default function PolicyPage() {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-white">
        <nav className="border-b border-gray-200">
          <ul className="flex space-x-8">
            <li className="pb-2 border-b-2 border-black">
              <a href="#" className="text-sm font-medium">Description</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Review</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Shipping</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Return Policies</a>
            </li>
          </ul>
        </nav>
  
        <div className="mt-6 space-y-6">
          <p className="text-sm text-gray-600">
            Button-up shirt sleeves and a relaxed silhouette. Its tailored with drapey, crinkle-texture fabric thats made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.
          </p>
  
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Front button placket</li>
                <li>• Adjustable sleeve tabs</li>
                <li>• Babaton embroidered crest at placket and hem</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-4">Materials Care</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6z" />
                    <path d="M12 9v6M9 12h6" />
                  </svg>
                  Machine wash max. 30°C. Short spin.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  Iron maximum 110°C.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                  </svg>
                  Do not bleach/bleach.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                  </svg>
                  Do not dry clean.
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  Tumble dry, medium heat.
                </li>
              </ul>
            </div>
          </div>
  
          <div>
            <h3 className="font-semibold mb-4">Materials Care</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Content: 100% LENZING™ ECOVERO™ Viscose</li>
              <li>• Care: Hand wash</li>
              <li>• Imported</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }