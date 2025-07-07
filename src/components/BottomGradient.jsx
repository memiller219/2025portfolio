const BottomGradient = ({ from = "transparent", to = "#00172a" }) => {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 w-full h-32 md:h-48 z-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
};

export default BottomGradient;
