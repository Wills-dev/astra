interface StepCardProps {
  label: string;
}

const StepCard = ({ label }: StepCardProps) => {
  return (
    <div className="border-[#F5F5F6] border-[0.63px] bg-linear-to-br from-[#CECFD2]/20 from-0% to-white to-100% backdrop-blur-2xl rounded-[7.6px] flex justify-center items-center w-[56.4px] h-[30.42px]">
      <span className="text-[8.24px] text-gray-800 px-[12.67px] py-[7.6px] border-[0.63px] border-gray-200 rounded-[5.07px] bg-white shadow-[0px_0.63px_1.27px_0px_#1018280D] w-[51.33px] h-[25.21] flex justify-center items-center text-center font-medium">
        {label}
      </span>
    </div>
  );
};

export default StepCard;
