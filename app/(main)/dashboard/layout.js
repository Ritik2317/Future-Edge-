"use client";

import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Industry Insights
        </h1>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <BarLoader color="#3b82f6" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}

export default Layout;
