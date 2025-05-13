
import React from "react";
import { Users, Building, Tag, Activity } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button>Download Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Customers"
          value="3,782"
          icon={<Users className="h-5 w-5" />}
          iconBg="bg-blue-500"
          change={11.01}
          trend="up"
        />
        <StatCard
          title="Properties"
          value="254"
          icon={<Building className="h-5 w-5" />}
          iconBg="bg-green-500"
          change={5.23}
          trend="up"
        />
        <StatCard
          title="Orders"
          value="5,359"
          icon={<Activity className="h-5 w-5" />}
          iconBg="bg-red-500"
          change={9.05}
          trend="down"
        />
        <StatCard
          title="Revenue"
          value="$98,742"
          icon={<Tag className="h-5 w-5" />}
          iconBg="bg-purple-500"
          change={7.45}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>
        <div>
          <PerformanceCard />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Statistics</CardTitle>
            <CardDescription>
              Target you've set for each month
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="px-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                  <TabsTrigger value="annually">Annually</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="monthly" className="pt-2">
                <div className="border-t">
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Agents</div>
                      <div className="text-xl font-bold mt-1">45</div>
                    </div>
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Properties</div>
                      <div className="text-xl font-bold mt-1">254</div>
                    </div>
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Listings</div>
                      <div className="text-xl font-bold mt-1">157</div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-slate-500">Sales</div>
                      <div className="text-xl font-bold mt-1">92</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="quarterly" className="pt-2">
                <div className="border-t">
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Agents</div>
                      <div className="text-xl font-bold mt-1">123</div>
                    </div>
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Properties</div>
                      <div className="text-xl font-bold mt-1">862</div>
                    </div>
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Listings</div>
                      <div className="text-xl font-bold mt-1">503</div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-slate-500">Sales</div>
                      <div className="text-xl font-bold mt-1">241</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="annually" className="pt-2">
                <div className="border-t">
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Agents</div>
                      <div className="text-xl font-bold mt-1">215</div>
                    </div>
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Properties</div>
                      <div className="text-xl font-bold mt-1">3,248</div>
                    </div>
                    <div className="p-4 border-r">
                      <div className="text-sm text-slate-500">Listings</div>
                      <div className="text-xl font-bold mt-1">1,892</div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-slate-500">Sales</div>
                      <div className="text-xl font-bold mt-1">976</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Properties</CardTitle>
            <CardDescription>
              Latest property listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <div className="bg-slate-200 rounded-lg h-16 w-16 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">Luxury Villa in Beverly Hills</h4>
                    <p className="text-sm text-slate-500 truncate">123 Main Street, Beverly Hills, CA</p>
                    <p className="text-sm font-medium text-realestate-primary">$2,450,000</p>
                  </div>
                  <Select defaultValue="active">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
