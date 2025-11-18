import FaqWrapper from "../FaqWrapper/FaqWrapper";
import HeroWrapper from "../HeroWrapper/HeroWrapper";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-linear-to-t from-[#000000] from-0% to-[#24032D] to-90%">
      <Navbar />
      <HeroWrapper />
      <FaqWrapper />
    </div>
  );
};

export default HeroSection;
