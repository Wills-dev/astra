const MessageCardWrapper = ({
  extraStyle = "rounded-tr-[2.07px] float-end w-[125.68px]",
  parentStyle = "",
  children,
}: {
  extraStyle?: string;
  children: React.ReactNode;
  parentStyle?: string;
}) => {
  return (
    <div className={`flex w-full ${parentStyle}`}>
      <div
        className={`p-[8.28px] bg-[#F5F5F5] rounded-[9.31px] shadow-[0px_0.52px_0.52px_0px_#0000000A] text-[7.24px] text-gray-700 ${extraStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MessageCardWrapper;
