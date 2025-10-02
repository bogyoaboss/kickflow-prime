import { Flame, ShoppingBag, TrendingUp, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CategoryButton from "@/components/CategoryButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sneakers.jpg";
import sneaker1 from "@/assets/sneaker-1.jpg";
import sneaker2 from "@/assets/sneaker-2.jpg";
import sneaker3 from "@/assets/sneaker-3.jpg";
import sneaker4 from "@/assets/sneaker-4.jpg";

const products = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    brand: "Nike",
    price: 580,
    image: sneaker1,
    lowestAsk: 580,
    highestBid: 545,
  },
  {
    id: "2",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 420,
    image: sneaker2,
    lowestAsk: 420,
    highestBid: 390,
  },
  {
    id: "3",
    name: "Ultraboost 21 Triple White",
    brand: "Adidas",
    price: 280,
    image: sneaker3,
    lowestAsk: 280,
    highestBid: 260,
  },
  {
    id: "4",
    name: "New Balance 990v5",
    brand: "New Balance",
    price: 350,
    image: sneaker4,
    lowestAsk: 350,
    highestBid: 320,
  },
];

const Index = () => {
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

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            <CategoryButton icon={Flame} label="Trending" active />
            <CategoryButton icon={ShoppingBag} label="Sneakers" />
            <CategoryButton icon={TrendingUp} label="Streetwear" />
            <CategoryButton icon={Package} label="New Drops" />
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
