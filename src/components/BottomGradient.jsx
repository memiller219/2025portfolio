const BottomGradient = ({ from = "transparent", to = "#00172a" }) => {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 w-full h-28 md:h-38 z-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
};

export default BottomGradient;
