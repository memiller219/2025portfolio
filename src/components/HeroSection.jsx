
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col px-20 justify-center px-4 hero-section"
    >

      <div className="max-w-2xl z-10">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="text-foreground opacity-0 animate-fade-in-delay-3">
              Hello! I'm{" "}
            </span>
            <span className="text-foreground opacity-0 animate-fade-in-delay-4">
              Michael Miller
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
