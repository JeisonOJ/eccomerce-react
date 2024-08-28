export default function Map() {
  return (
    <section className="relative p-8 ">
      <div className="relative w-full h-[450px] flex justify-center">
        <div
          className="relative w-full h-[450px] flex justify-center"
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369107.5366642906!2d-79.7076989920169!3d43.7177675396109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2sco!4v1724690181347!5m2!1ses-419!2sco" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
          }}
        ></div>
        <div className="absolute bottom-14 left-10 bg-white flex flex-col justify-center text-black p-4 w-[20%]">
          <h4 className="text-xl font-bold mb-2">Toronto Store</h4>
          <p className="mb-1">301 Front St W Toronto, Canada</p>
          <p className="mb-1">support@ecomus.com</p>
          <p className="mb-1">(08) 8942 1299</p>
          <p className="mb-1">Mon - Fri, 8:30am - 10:30pm</p>
          <p className="mb-1">Saturday, 8:30am - 10:30pm</p>
          <p>Sunday, Closed</p>

          <p className="underline mt-5">Get directions</p>
        </div>
      </div>
    </section>
  );
}
