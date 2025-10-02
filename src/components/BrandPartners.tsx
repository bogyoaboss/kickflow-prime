import nikeLog from "@/assets/brand-nike.png";
import gucciLogo from "@/assets/brand-gucci.png";
import lvLogo from "@/assets/brand-lv.png";
import balmainLogo from "@/assets/brand-balmain.png";

const BrandPartners = () => {
  const brands = [
    { name: "Nike", logo: nikeLog },
    { name: "Gucci", logo: gucciLogo },
    { name: "Louis Vuitton", logo: lvLogo },
    { name: "Balmain", logo: balmainLogo },
  ];

  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Official Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
