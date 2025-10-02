import { ShieldCheck, TrendingUp, Package } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import PriceChart from "@/components/PriceChart";
import LegitCheckBox from "@/components/LegitCheckBox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sneaker1 from "@/assets/sneaker-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBuy = () => {
    toast.success("Added to cart! Proceeding to checkout...");
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  const handleBid = () => {
    toast.success("Your bid has been placed successfully!");
  };

  const handleSell = () => {
    toast.success("Your item is now listed for sale!");
  };

  const handleAsk = () => {
    toast.success("Your ask has been placed successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border">
              <img
                src={sneaker1}
                alt="Air Jordan 1 Retro High OG"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden bg-card border border-border cursor-pointer hover:border-primary transition-colors"
                >
                  <img
                    src={sneaker1}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="gap-1">
                  <ShieldCheck className="h-3 w-3 text-primary" />
                  <span>Verified Authentic</span>
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>Trending</span>
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Nike
              </p>
              <h1 className="text-4xl font-bold mb-4">Air Jordan 1 Retro High OG</h1>
              <p className="text-muted-foreground">
                The Air Jordan 1 Retro High OG features premium materials and classic
                styling that made this silhouette an icon.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 bg-card rounded-lg border border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Lowest Ask</p>
                <p className="text-3xl font-bold text-primary">$580</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Highest Bid</p>
                <p className="text-3xl font-bold">$545</p>
              </div>
            </div>

            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>
              <TabsContent value="buy" className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[8, 8.5, 9, 9.5, 10, 10.5].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="hover:border-primary"
                    >
                      US {size}
                    </Button>
                  ))}
                </div>
                <Button size="lg" className="w-full text-lg" onClick={handleBuy}>
                  Buy for $580
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" onClick={handleBid}>
                  Place Bid
                </Button>
              </TabsContent>
              <TabsContent value="sell" className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {[8, 8.5, 9, 9.5, 10, 10.5].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="hover:border-primary"
                    >
                      US {size}
                    </Button>
                  ))}
                </div>
                <Button size="lg" variant="secondary" className="w-full text-lg" onClick={handleSell}>
                  Sell for $545
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" onClick={handleAsk}>
                  Place Ask
                </Button>
              </TabsContent>
            </Tabs>

            <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
              <Package className="h-5 w-5 text-primary" />
              <p className="text-sm">
                Free shipping on orders over $150 • Ships within 2-3 business days
              </p>
            </div>
          </div>
        </div>

        {/* Legit Check & Price Chart */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LegitCheckBox />
          <PriceChart />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
