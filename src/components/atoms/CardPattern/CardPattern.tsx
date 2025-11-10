const CardPattern = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div
      className={`border border-white/5 bg-white/4 opacity-80 ${extraStyle}`}
    />
  );
};

export default CardPattern;
