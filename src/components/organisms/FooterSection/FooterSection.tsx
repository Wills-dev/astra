import Container from "@/components/atoms/Container/Container";
import LowerFooter from "@/components/molecules/LowerFooter/LowerFooter";
import UpperFooter from "@/components/molecules/UpperFooter/UpperFooter";

const FooterSection = () => {
  return (
    <div className="h-[502px] w-full bg-[url('/assets/images/footer-img.svg')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute sm:bottom-10 bottom-0 left-0 w-full">
        <Container className="">
          <div className="w-full bg-white rounded-[29px] sm:min-h-[539px] md:px-16 sm:px-8 px-4 sm:py-16 py-6 flex flex-col justify-between gap-10">
            <UpperFooter />
            <LowerFooter />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterSection;
