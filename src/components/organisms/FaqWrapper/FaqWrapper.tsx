import Container from "@/components/atoms/Container/Container";
import FaqContent from "@/components/molecules/FaqContent/FaqContent";
import FaqHeader from "@/components/molecules/FaqHeader/FaqHeader";

const FaqWrapper = () => {
  return (
    <section className="bg-[#F0F1F1] sm:py-36 py-20">
      <Container>
        <div className="w-full">
          <div className="flex items-center justify-between w-full gap-10 flex-wrap">
            <FaqHeader />
            <FaqContent />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqWrapper;
