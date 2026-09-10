import Header from "@/components/header";
import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";
import Destinations from "@/components/destinations";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream">
      <Hero />
      <Header />
      <FeatureCards />
      <Destinations />
      <Newsletter />
      <Footer />
    </main>
  );
}