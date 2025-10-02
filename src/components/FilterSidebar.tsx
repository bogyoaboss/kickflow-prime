import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  gender: string;
  brands: string[];
  sizes: string[];
  priceRange: string;
}

const FilterSidebar = ({ onFilterChange }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    gender: "all",
    brands: [],
    sizes: [],
    priceRange: "all",
  });

  const brands = ["Nike", "Adidas", "Gucci", "Balmain", "Louis Vuitton", "New Balance"];
  const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];
  const priceRanges = [
    { label: "All", value: "all" },
    { label: "Under $300", value: "0-300" },
    { label: "$300 - $500", value: "300-500" },
    { label: "$500 - $700", value: "500-700" },
    { label: "Over $700", value: "700+" },
  ];

  const handleGenderChange = (value: string) => {
    const newFilters = { ...filters, gender: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    const newFilters = { ...filters, sizes: newSizes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: string) => {
    const newFilters = { ...filters, priceRange: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      gender: "all",
      brands: [],
      sizes: [],
      priceRange: "all",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const FilterContent = () => (
    <div className="space-y-8 py-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      </div>

      {/* Gender Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Gender</Label>
        <RadioGroup value={filters.gender} onValueChange={handleGenderChange}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="cursor-pointer">All</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="men" id="men" />
            <Label htmlFor="men" className="cursor-pointer">Men</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="women" id="women" />
            <Label htmlFor="women" className="cursor-pointer">Women</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="unisex" id="unisex" />
            <Label htmlFor="unisex" className="cursor-pointer">Unisex</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Brand Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Brand</Label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => handleBrandToggle(brand)}
              />
              <Label htmlFor={brand} className="cursor-pointer">{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Size (US)</Label>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={filters.sizes.includes(size) ? "default" : "outline"}
              size="sm"
              onClick={() => handleSizeToggle(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Price Range</Label>
        <RadioGroup value={filters.priceRange} onValueChange={handlePriceChange}>
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={range.value} id={range.value} />
              <Label htmlFor={range.value} className="cursor-pointer">{range.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filter Products</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border pr-6 overflow-y-auto sticky top-20 h-[calc(100vh-5rem)]">
        <FilterContent />
      </aside>
    </>
  );
};

export default FilterSidebar;
