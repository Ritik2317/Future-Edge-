import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

function Layout({ children }) {
  return (
    <div className="px-5 m-5">
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
