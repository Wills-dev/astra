import Container from "@/components/atoms/Container/Container";
import TeamHeader from "@/components/molecules/TeamHeader/TeamHeader";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="bg-black sm:py-36 py-20">
      <Container>
        <div className="space-y-14">
          <TeamHeader />
          <div className="flex items-center justify-center w-full gap-2">
            <Image
              src="/assets/icons/close-tag.svg"
              alt="close tag"
              width={20}
              height={20}
            />
            <p className="text-[#94969C] sm:text-sm text-xs">
              Works with React, Vue, Angular, vanilla JS, and more
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
