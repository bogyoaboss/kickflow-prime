import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  lowestAsk: number;
  highestBid: number;
}

const ProductCard = ({ id, name, brand, price, image, lowestAsk, highestBid }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover-lift">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{brand}</p>
            <Badge variant="outline" className="gap-1">
              <ShieldCheck className="h-3 w-3 text-primary" />
              <span className="text-xs">Verified</span>
            </Badge>
          </div>
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">{name}</h3>
          <div className="flex items-end justify-between pt-2 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">Lowest Ask</p>
              <p className="font-bold text-lg text-primary">${lowestAsk}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Highest Bid</p>
              <p className="font-semibold text-sm">${highestBid}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
