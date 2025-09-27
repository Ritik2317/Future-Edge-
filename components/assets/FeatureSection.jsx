import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '@/data/features'
import { CardSim } from 'lucide-react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function FeatureSection() {
  return (
    <div className="bg-black text-white py-16 px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
            Powerful Features for Your Career Growth
            </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
            <Card
                key={index}
                className="border border-white/20 rounded-xl bg-black/40 hover:border-white/40 transition p-6 flex flex-col items-center text-center"
            >
                <CardContent className="flex flex-col items-center text-center space-y-4">
                <div className="text-4xl text-white">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
                </CardContent>
            </Card>
            ))}
        </div>
    </div>
  )
}

export default FeatureSection