import { useLocation } from "react-router-dom";
import LandingPagesLayout from "@/components/templates/LandingPagesLayout.tsx";
import MainContent from "@/components/organisms/MainContent";
import ResumeContent from "@/components/organisms/ResumeContent";
import PortfolioContent from "@/components/organisms/PortfolioContent";
import BlogContent from "@/components/organisms/BlogContent";
import ContactContent from "@/components/organisms/ContactContent";

export default function LandingPages() {
  const location = useLocation();

  return (
    <LandingPagesLayout>
      {location.pathname === "/" && <MainContent />}
      {location.pathname === "/resume" && <ResumeContent />}
      {location.pathname === "/portfolio" && <PortfolioContent />}
      {location.pathname === "/blog" && <BlogContent />}
      {location.pathname === "/contact" && <ContactContent />}
    </LandingPagesLayout>
  );
}
