import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'

function HeroSection() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-gradient-to px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center m-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Your Personal AI Career Coach
            </h1>

            <h2 className="text-lg md:text-2xl text-center max-w-2xl mb-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Get tailored guidance, actionable insights, and smart strategies to land your dream job — faster and with confidence.
            </h2>
            <SignedOut>
            <Link href="/sign-in">
                <Button className="hover:cursor-pointer">
                Get Started
                </Button>
            </Link>
            </SignedOut>
            <div className="m-10 p-5 ">
                <img src="/landing-page-banner.png"/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection