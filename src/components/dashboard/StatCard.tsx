
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg?: string;
  change?: number;
  trend?: "up" | "down" | "neutral";
};

export const StatCard = ({
  title,
  value,
  icon,
  iconBg = "bg-realestate-primary",
  change,
  trend,
}: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="space-y-1">
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        {change !== undefined && trend && (
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <span className="text-realestate-accent flex items-center">
                <ArrowUp className="h-4 w-4" />
                {change}%
              </span>
            ) : trend === "down" ? (
              <span className="text-realestate-danger flex items-center">
                <ArrowDown className="h-4 w-4" />
                {change}%
              </span>
            ) : (
              <span className="text-slate-500">{change}%</span>
            )}
            <span className="text-xs text-slate-500">from last month</span>
          </div>
        )}
      </div>
      <div className={cn("stat-icon", iconBg)}>{icon}</div>
    </div>
  );
};

export default StatCard;
