import AuditCard from "@/components/molecules/AuditCard/AuditCard";
import CompliantCard from "@/components/molecules/CompliantCard/CompliantCard";
import EncryptionCard from "@/components/molecules/EncryptionCard/EncryptionCard";

const TrustedCardWapper = () => {
  return (
    <div className="mt-10 w-full grid grid-cols-6 gap-2">
      <CompliantCard />
      <EncryptionCard />
      <AuditCard />
      <div className="lg:col-span-2 sm:col-span-3 col-span-6 lg:col-start-3 sm:col-start-4 lg:row-start-2 sm:row-start-4 lg:row-end-5 sm:row-end-8 h-[459px] bg-red-900 rounded-2xl"></div>
      <div className="lg:col-span-2 sm:col-span-3 col-span-6 lg:col-start-5 sm:col-start-4 lg:row-start-3 sm:row-start-3 lg:row-end-6 sm:row-end-4 h-[270px] bg-red-950 rounded-2xl"></div>
    </div>
  );
};

export default TrustedCardWapper;
