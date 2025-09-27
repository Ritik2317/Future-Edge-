import React from 'react'

function FeatureCard({heading, subheading}) {
  return (
    <div className="border border-white/20 bg-white/5 rounded-2xl shadow-lg p-6 mx-2 hover:shadow-xl hover:scale-105 transition transform duration-300">
        <h1 className="text-xl font-semibold text-white mb-2">{heading}</h1>
        <h2 className="text-sm text-gray-300">{subheading}</h2>
    </div>

  )
}

export default FeatureCard