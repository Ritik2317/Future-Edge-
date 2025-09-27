import FaqSection from "@/components/assets/FaqSection";
import FeatureSection from "@/components/assets/FeatureSection";
import HeroSection from "@/components/assets/HeroSection";
import HowItWorksSection from "@/components/assets/HowItWorksSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeatureSection/>
      <HowItWorksSection/>
      <FaqSection/>
    </>
  );
}
