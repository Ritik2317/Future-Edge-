import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '@/data/features'
import { CardSim } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/data/faqs'
function FaqSection() {
  return (
    <div className="bg-black text-white py-16 px-6">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold">
      Got Questions? We got Answers!
    </h2>
  </div>

  <div className="max-w-3xl mx-auto space-y-4">
    {faqs.map((feature, index) => (
      <Accordion
        key={index}
        type="single"
        collapsible
        className="border-b border-gray-700"
      >
        <AccordionItem value={`item-${index}`}>
          <AccordionTrigger className="font-medium text-lg hover:cursor-pointer">
            {feature.question}
          </AccordionTrigger>
          <AccordionContent className="mt-2 leading-relaxed">
            {feature.answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ))}
  </div>
</div>

  )
}

export default FaqSection