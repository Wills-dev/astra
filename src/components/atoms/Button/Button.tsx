"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  onClick,
  className = "relative inline-flex items-center justify-center px-6 rounded-full text-white font-medium bg-linear-to-r from-[#BD16F3] hover:from-[#9B13C7] from-60% hover:from-50% to-[#BB86CC] hover:to-[#6C1F85] to-100% h-10 duration-300 transition-all",
}: ButtonProps) => {
  return (
    <div className="p-[0.5px] bg-linear-to-r from-white to-white/30 rounded-full">
      <button
        onClick={onClick}
        className={`${className} cursor-pointer max-sm:text-xs`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
