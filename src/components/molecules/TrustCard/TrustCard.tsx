import TrustedCardsHeader from "../TrustedCardsHeader/TrustedCardsHeader";

const TrustCard = () => {
  return (
    <div className="lg:col-span-2 sm:col-span-3 col-span-6 lg:col-start-3 sm:col-start-4 lg:row-start-2 sm:row-start-4 lg:row-end-5 sm:row-end-8 h-[459px] bg-red-900 rounded-2xl sm:py-8 py-6 overflow-hidden relative bg-[linear-gradient(157.21deg,#7392D0_-3.72%,#387754_95.37%)] sm:px-6 px-2">
      <div className=" w-full h-full opacity-20 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/bbg.jpg')] absolute top-0 left-0" />
      <div className="space-y-4 h-full">
        <TrustedCardsHeader
          title="Zero-trust architecture"
          description="Astra’s zero-trust framework ensures every request, user, and connection is verified before access."
        />
      </div>
    </div>
  );
};

export default TrustCard;
