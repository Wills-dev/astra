import Container from "@/components/atoms/Container/Container";
import TrustedHeader from "@/components/molecules/TrustedHeader/TrustedHeader";
import TrustedCardWapper from "../TrustedCardWapper/TrustedCardWapper";

const TrustedSection = () => {
  return (
    <div className="bg-white sm:py-36 py-20">
      <Container>
        <TrustedHeader />
        <TrustedCardWapper />
      </Container>
    </div>
  );
};

export default TrustedSection;
