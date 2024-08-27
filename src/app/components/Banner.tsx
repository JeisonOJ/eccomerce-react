import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="flex items-center bg-[#eef0de] ">
      <div className=" p-8 w-1/2 flex flex-col gap-4">
        <h2 className="text-9xl mb-4">Summer Escapades</h2>
        <p className="mb-4">
          Embrace the sun-kissed season with our collection of breezy summer
          essentials.
        </p>
        <Link
          href="/details"
          className="bg-white text-black p-4 rounded hover:bg-gray-800 hover:text-white transition w-1/4"
        >
          Shop collection &gt;
        </Link>
      </div>
      <div className="w-1/2 bg-white h-[600px] relative overflow-hidden">
        <Image
          src="https://img.freepik.com/foto-gratis/retrato-mujer-romantica-labios-oscuros-sonrisa-maravillosa-cubre-cara-sombrero-sostiene-sombrero-sobre-fondo-aislado_291650-1956.jpg?t=st=1724779384~exp=1724782984~hmac=4c6a46956c6543b8ce5f4d8a63ecf9e60e199e8f0c5bba8f2456c12e6644785c&w=1380"
          alt="Woman with hat"
          fill

        />
      </div>
    </section>
  );
}
