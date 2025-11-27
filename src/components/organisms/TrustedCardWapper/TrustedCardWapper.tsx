import AuditCard from "@/components/molecules/AuditCard/AuditCard";
import CompliantCard from "@/components/molecules/CompliantCard/CompliantCard";
import EncryptionCard from "@/components/molecules/EncryptionCard/EncryptionCard";
import TrustCard from "@/components/molecules/TrustCard/TrustCard";

const TrustedCardWapper = () => {
  return (
    <div className="mt-10 w-full grid grid-cols-6 gap-2">
      <CompliantCard />
      <EncryptionCard />
      <AuditCard />
      <TrustCard />
      <div className="lg:col-span-2 sm:col-span-3 col-span-6 lg:col-start-5 sm:col-start-4 lg:row-start-3 sm:row-start-3 lg:row-end-6 sm:row-end-4 h-[270px] bg-red-950 rounded-2xl"></div>
    </div>
  );
};

export default TrustedCardWapper;
