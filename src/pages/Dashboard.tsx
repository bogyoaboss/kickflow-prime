import { ShoppingBag, TrendingUp, Package, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import sneaker1 from "@/assets/sneaker-1.jpg";

const Dashboard = () => {
  const stats = [
    { label: "Active Bids", value: "3", icon: TrendingUp, color: "text-primary" },
    { label: "Active Asks", value: "2", icon: DollarSign, color: "text-primary" },
    { label: "Purchases", value: "8", icon: ShoppingBag, color: "text-foreground" },
    { label: "Sales", value: "5", icon: Package, color: "text-foreground" },
  ];

  const orders = [
    {
      id: "1",
      name: "Air Jordan 1 Retro High OG",
      image: sneaker1,
      size: "10",
      price: 580,
      status: "pending",
      type: "purchase",
    },
    {
      id: "2",
      name: "Yeezy Boost 350 V2",
      image: sneaker1,
      size: "9.5",
      price: 420,
      status: "shipped",
      type: "purchase",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your marketplace activity</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Orders Tabs */}
        <Tabs defaultValue="purchases" className="w-full">
          <TabsList>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="bids">Bids</TabsTrigger>
            <TabsTrigger value="asks">Asks</TabsTrigger>
          </TabsList>

          <TabsContent value="purchases" className="mt-6">
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="h-20 w-20 rounded-lg overflow-hidden bg-secondary">
                        <img
                          src={order.image}
                          alt={order.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{order.name}</h3>
                        <p className="text-sm text-muted-foreground">Size: US {order.size}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl mb-1">${order.price}</p>
                        <Badge
                          variant={order.status === "shipped" ? "default" : "secondary"}
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sales" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No sales yet</p>
            </div>
          </TabsContent>

          <TabsContent value="bids" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No active bids</p>
            </div>
          </TabsContent>

          <TabsContent value="asks" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No active asks</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
