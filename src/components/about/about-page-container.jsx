import Navbar from "../sheared/navber/Navbar";
import ContactSection from "./contact-us";
import { MissionSection } from "./our-mettion";

import { ValuesSection } from "./values-section";
import Footer from "./../sheared/Footer";
import TeamSection from "./teme-section";

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
