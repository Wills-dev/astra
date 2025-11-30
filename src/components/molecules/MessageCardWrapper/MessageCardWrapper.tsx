const MessageCardWrapper = ({
  extraStyle = "rounded-tr-[2.07px] float-end w-[125.68px] text-[7.24px]",
  parentStyle = "",
  children,
  cardStyle = "text-[7.24px] rounded-[9.31px] p-[8.28px]",
}: {
  extraStyle?: string;
  children: React.ReactNode;
  parentStyle?: string;
  cardStyle?: string;
}) => {
  return (
    <div className={`flex w-full ${parentStyle}`}>
      <div
        className={`${cardStyle} bg-[#F5F5F5] shadow-[0px_0.52px_0.52px_0px_#0000000A] text-gray-700 ${extraStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MessageCardWrapper;
