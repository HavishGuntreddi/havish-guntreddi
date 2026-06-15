import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import Email from "../components/Email";
import Footer from "../components/Footer";
import AchievementsSection from "../components/Achievements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
