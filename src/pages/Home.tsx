import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../sections/HeroSection";
import LearnFromSection from "../sections/LearnFromSection";
import FreeCourseBanner from "../sections/FreeCourseBanner";
import CoursesGridSection from "../sections/CoursesGridSection";
import OptionScalperPromo from "../sections/OptionScalperPromo";
import ProFeedbackSection from "../sections/ProFeedbackSection";
import AboutSection from "../sections/AboutSection";
import DematPartnersSection from "../sections/DematPartnersSection";
import LearningDiagramSection from "../sections/LearningDiagramSection";
import ScamAlertSection from "../sections/ScamAlertSection";
import SocialBanner from "../sections/SocialBanner";

type HomePageProps = {
  targetSection?: string;
};

function HomePage({ targetSection }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    const id = targetSection || location.hash.replace("#", "");
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  }, [targetSection, location.hash]);

  return (
    <>
      <HeroSection />
      <LearnFromSection />
      <FreeCourseBanner />
      <CoursesGridSection />
      <OptionScalperPromo />
      <ProFeedbackSection />
      <AboutSection />
      <DematPartnersSection />
      <LearningDiagramSection />
      <ScamAlertSection />
      <SocialBanner />
    </>
  );
}

export default HomePage;
