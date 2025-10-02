import { getIndustryInsights } from '@/actions/dashboard';
import { getUserOnboardingStatus } from '@/actions/user';
import DashboardView from '@/components/assets/DashboardView';
import { redirect } from 'next/navigation';
import React from 'react'

async function IndustryInsightsPage() {
  const {isOnboarded} = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();
    if(!isOnboarded){
      redirect("/onboarding");
    }
  return (
    <div>
      <DashboardView insights = {insights}/>
    </div>
  )
}

export default IndustryInsightsPage