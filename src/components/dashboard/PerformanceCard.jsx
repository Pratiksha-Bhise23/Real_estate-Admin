
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const PerformanceCard = () => {
  const progress = 75.5; // Percentage completed

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Monthly Target</CardTitle>
        <button className="p-2 rounded-md text-slate-500 hover:bg-slate-100">
          <svg
            width="15"
            height="3"
            viewBox="0 0 15 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M1.5 1.5H13.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-slate-500 mb-5">
          Target you've set for each month
        </p>
        
        <div className="relative h-40 flex items-center justify-center">
          {/* Circle progress indicator */}
          <div className="relative h-36 w-36">
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              style={{ transform: 'rotate(-90deg)' }}
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="8"
              />
              
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#4C6FFF"
                strokeWidth="8"
                strokeDasharray="282.7"
                strokeDashoffset={282.7 - (282.7 * progress) / 100}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Percentage text in the middle */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-3xl font-bold">{progress}%</span>
              <span className="text-xs text-green-600">+10%</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-center text-sm text-slate-600 mb-2">
            You earn $3,287 today, it's higher than last month.
            <br />Keep up your good work!
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-sm text-slate-500">Target</div>
              <div className="text-lg font-semibold">$20K</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-500">Revenue</div>
              <div className="text-lg font-semibold">$20K</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-500">Today</div>
              <div className="text-lg font-semibold">$20K</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
