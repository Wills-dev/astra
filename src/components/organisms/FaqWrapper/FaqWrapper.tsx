import Container from "@/components/atoms/Container/Container";
import FaqContent from "@/components/molecules/FaqContent/FaqContent";
import FaqHeader from "@/components/molecules/FaqHeader/FaqHeader";

const FaqWrapper = () => {
  return (
    <div className="bg-[#F0F1F1] py-28">
      <Container>
        <div className="flex items-center justify-between w-full ">
          <FaqHeader />
          <FaqContent />
        </div>
      </Container>
    </div>
  );
};

export default FaqWrapper;
