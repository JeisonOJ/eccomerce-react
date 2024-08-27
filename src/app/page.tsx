import Banner from "@/app/components/Banner";
import BrandLogos from "@/app/components/BrandLogos";
import Collections from "@/app/components/Collections";
import Features from "@/app/components/Features";
import Map from "@/app/components/Map";
import ProductsList from "@/app/components/productsList";
import PromotionalBanners from "@/app/components/promotionalBanners";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans">
      <Banner />
      <Collections />
      <ProductsList />
      <PromotionalBanners />
      <Features />
      <Map />
      <BrandLogos />
      <Footer />
    </div>
  );
}
