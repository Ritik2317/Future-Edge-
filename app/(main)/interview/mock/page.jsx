import Quiz from '@/components/assets/Quiz'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function MockInterviewPage() {
  return (
    <div>
      <div>
        <Link href={"/interview"}>
          <Button variant={"link"} className="hover:cursor-pointer">
            <ArrowLeft/>Back to Interview Page
          </Button>
        </Link>
        <div>
        <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Mock Interview
        </h1>
          <p className='text-muted-foreground'>Test your knowledge with industry-specific questions.</p>
        </div>
        <Quiz/>
      </div>
    </div>
  )
}

export default MockInterviewPage