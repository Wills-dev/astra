const CardLayout = ({
  height = "h-[241px]",
  children,
}: {
  height?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`bg-white rounded-[15.21px] p-2 w-[273px] ${height}`}>
      {children}
    </div>
  );
};

export default CardLayout;
