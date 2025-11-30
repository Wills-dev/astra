import Container from "@/components/atoms/Container/Container";
import DocContent from "@/components/molecules/DocContent/DocContent";
import DocHeader from "@/components/molecules/DocHeader/DocHeader";

const DocSection = () => {
  return (
    <section className="sm:py-36 py-20 bg-[#241027] overflow-hidden">
      <Container>
        <div className="space-y-14">
          <DocHeader />
          <DocContent />
        </div>
      </Container>
    </section>
  );
};

export default DocSection;
