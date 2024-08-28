import Link from "next/link";
import Dropdown2 from "./Dropdown2";

export default function Header() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "Products", link: "/products" },
    { title: "Pages", link: "/pages" },
    { title: "Blog", link: "/blog" },
    { title: "Buy now", link: "/buynow" },
  ];

  return (
    <header className="flex items-center flex-col p-4 border-gray-200">
      <div className="flex items-center justify-between w-full">
        <Dropdown2 />
        <h1 className="text-2xl font-bold w-1/3 text-center">Ecomus</h1>
        <div className="flex items-center w-1/3 justify-end gap-5">
          <Link href="#">
            <i className="bx bx-search-alt-2"></i>
          </Link>
          <Link href="#">
            <i className="bx bx-user"></i>
          </Link>
          <Link href="#">
            <i className="bx bx-heart"></i>
          </Link>
          <Link href="#">
            <i className="bx bx-shopping-bag"></i>
          </Link>
        </div>
      </div>

      <nav className="ml-8 mt-4">
        {links.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="mr-10 text-gray-600 hover:text-gray-900"
          >
            {item.title}
          </Link>
        ))}
        <ul></ul>
      </nav>
    </header>
  );
}
