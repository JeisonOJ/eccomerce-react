import Link from "next/link";

export default function Header() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "Products", link: "/products"},
    { title: "Pages", link: "/pages" },
    { title: "Blog", link: "/blog" },
    { title: "Buy now", link: "buynow" },
  ];

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">@ecomus</h1>
        <nav className="ml-8">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              {item.title}
            </Link>
          ))}
          <ul></ul>
        </nav>
      </div>
      <div className="flex items-center">
        {/* Icons would go here */}
        <span className="sr-only">User menu and search</span>
      </div>
    </header>
  );
}
