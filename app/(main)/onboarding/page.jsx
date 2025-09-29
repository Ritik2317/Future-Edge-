import { getUserOnboardingStatus } from '@/actions/user'
import OnboardingForm from '@/components/assets/OnboardingForm'
import { industries } from '@/data/industries'
import { redirect } from 'next/navigation';
import React from 'react'

async function OnboardingPage() {

  const {isOnboarded} = await getUserOnboardingStatus();
  if(isOnboarded){
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries = {industries}/>
    </main>
  )
}

export default OnboardingPage