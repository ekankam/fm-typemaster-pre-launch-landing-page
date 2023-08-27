import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full min-w-[375px] h-full mx-auto">
      <Header />
      <main>
        <Hero />
        <MainSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
