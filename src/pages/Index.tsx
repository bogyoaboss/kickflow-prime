import { useState } from "react";
import { Flame, ShoppingBag, TrendingUp, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CategoryButton from "@/components/CategoryButton";
import FilterSidebar, { FilterState } from "@/components/FilterSidebar";
import BrandPartners from "@/components/BrandPartners";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sneakers.jpg";
import sneaker1 from "@/assets/sneaker-1.jpg";
import sneaker2 from "@/assets/sneaker-2.jpg";
import sneaker3 from "@/assets/sneaker-3.jpg";
import sneaker4 from "@/assets/sneaker-4.jpg";

const allProducts = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    brand: "Nike",
    price: 580,
    image: sneaker1,
    lowestAsk: 580,
    highestBid: 545,
    gender: "unisex",
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
  },
  {
    id: "2",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 420,
    image: sneaker2,
    lowestAsk: 420,
    highestBid: 390,
    gender: "men",
    sizes: ["9", "9.5", "10", "10.5", "11"],
  },
  {
    id: "3",
    name: "Gucci Ace Sneakers",
    brand: "Gucci",
    price: 650,
    image: sneaker3,
    lowestAsk: 650,
    highestBid: 620,
    gender: "women",
    sizes: ["7", "7.5", "8", "8.5", "9"],
  },
  {
    id: "4",
    name: "Balmain B-Bold Sneakers",
    brand: "Balmain",
    price: 720,
    image: sneaker4,
    lowestAsk: 720,
    highestBid: 680,
    gender: "men",
    sizes: ["9", "10", "10.5", "11", "11.5"],
  },
  {
    id: "5",
    name: "LV Trainer Sneaker",
    brand: "Louis Vuitton",
    price: 1200,
    image: sneaker1,
    lowestAsk: 1200,
    highestBid: 1150,
    gender: "unisex",
    sizes: ["8", "9", "10", "11"],
  },
  {
    id: "6",
    name: "Nike Dunk Low",
    brand: "Nike",
    price: 280,
    image: sneaker2,
    lowestAsk: 280,
    highestBid: 260,
    gender: "women",
    sizes: ["7", "7.5", "8", "8.5"],
  },
];

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    gender: "all",
    brands: [],
    sizes: [],
    priceRange: "all",
  });

  const filterProducts = () => {
    return allProducts.filter((product) => {
      // Gender filter
      if (filters.gender !== "all" && product.gender !== filters.gender && product.gender !== "unisex") {
        return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0) {
        const hasSize = filters.sizes.some((size) => product.sizes.includes(size));
        if (!hasSize) return false;
      }

      // Price filter
      if (filters.priceRange !== "all") {
        const price = product.lowestAsk;
        if (filters.priceRange === "0-300" && price >= 300) return false;
        if (filters.priceRange === "300-500" && (price < 300 || price >= 500)) return false;
        if (filters.priceRange === "500-700" && (price < 500 || price >= 700)) return false;
        if (filters.priceRange === "700+" && price < 700) return false;
      }

      return true;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              The New Way to
              <span className="block text-primary">Buy & Sell</span>
              Sneakers
            </h1>
            <p className="text-xl text-muted-foreground">
              100% authentic products. Verified by our experts. Market-driven prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Buying
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <BrandPartners />

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            <CategoryButton icon={Flame} label="Trending" active />
            <CategoryButton icon={ShoppingBag} label="Sneakers" />
            <CategoryButton icon={TrendingUp} label="Luxury" />
            <CategoryButton icon={Package} label="New Drops" />
          </div>
        </div>
      </section>

      {/* Products with Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <FilterSidebar onFilterChange={setFilters} />
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold">Trending Now</h2>
                  <p className="text-muted-foreground mt-1">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
