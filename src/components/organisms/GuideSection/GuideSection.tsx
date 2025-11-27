import Container from "@/components/atoms/Container/Container";
import GuideHeader from "@/components/molecules/GuideHeader/GuideHeader";
import GuideCardsWrapper from "../GuideCardsWrapper/GuideCardsWrapper";

const GuideSection = () => {
  return (
    <section className="bg-[#F0F1F1] sm:py-36 py-20">
      <Container className="xl:px-6">
        <div className="space-y-14">
          <GuideHeader />
          <GuideCardsWrapper />
        </div>
      </Container>
    </section>
  );
};

export default GuideSection;
