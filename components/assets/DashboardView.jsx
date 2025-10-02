"use client";
import { Brain, Briefcase, LineChart, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function DashboardView({ insights }) {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const OutlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Market Outlook */}
      <Card className="bg-black border border-gray-800 rounded-xl shadow-lg p-4 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">
            Market Outlook
          </CardTitle>
          <OutlookIcon className={`h-4 w-4 ${OutlookColor}`} />
        </CardHeader>
        <CardContent className="flex flex-1 items-center">
          <div className="text-2xl font-bold text-white">
            {insights.marketOutlook.toUpperCase()}
          </div>
        </CardContent>
      </Card>

      {/* Industry Growth */}
      <Card className="bg-black border border-gray-800 rounded-xl shadow-lg p-4 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">
            Industry Growth
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent className="flex flex-1 items-center">
          <div className="w-full">
            <div className="text-2xl font-bold text-white">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className="mt-2 w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Demand Level */}
      <Card className="bg-black border border-gray-800 rounded-xl shadow-lg p-4 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">
            Demand Level
          </CardTitle>
          <Briefcase className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent className="flex flex-1 items-center">
          <div className="w-full">
            <div className="text-2xl font-bold text-white">
              {insights.demandLevel.toUpperCase()}
            </div>
            <div
              className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </div>
        </CardContent>
      </Card>

      {/* Top Skills */}
      <Card className="bg-black border border-gray-800 rounded-xl shadow-lg p-4 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-gray-300">
            Top Skills
          </CardTitle>
          <Brain className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent className="flex flex-1 items-center">
          <div className="flex flex-wrap gap-2">
            {insights.topSkills.map((skill) => (
              <Button key={skill} variant="secondary">
                {skill}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Salary Ranges */}
      <Card className="bg-black border border-gray-800 rounded-xl shadow-lg p-4 flex flex-col lg:col-span-4">
        <CardHeader>
          <CardTitle>Ranges by Role</CardTitle>
          <CardDescription>
            Displaying minimum, median and maximum salaries (in Thousands)
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1">
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-black text-white p-2 rounded">
                          <p className="font-bold">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name}>
                              {item.name}: {item.value}K
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends & Recommended Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-4">
        <Card className="col-span-1 flex flex-col">
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="col-span-1 flex flex-col">
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills.map((skill) => (
                <Button key={skill} variant="secondary">
                  {skill}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardView;
