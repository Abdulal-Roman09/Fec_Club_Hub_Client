import Navbar from "../sheared/navber/Navbar";
import ContactSection from "./contact-us";
import { MissionSection } from "./our-mettion";
import { TeamSection } from "./teme-section";
import { ValuesSection } from "./values-section";
import Footer from "./../sheared/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <main>
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
