import React from 'react';

const PageLoading = () => {
  return (
    <div className="flex w-full min-h-screen flex-col gap-6 p-6 md:p-10 max-w-7xl mx-auto">
     
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <div className="skeleton h-4 w-1/3"></div>
          <div className="skeleton h-4 w-2/3"></div>
        </div>
      </div>


      <div className="skeleton h-64 w-full rounded-xl"></div>

  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="skeleton h-40 w-full rounded-lg"></div>
        <div className="skeleton h-40 w-full rounded-lg"></div>
        <div className="skeleton h-40 w-full rounded-lg"></div>
      </div>


      <div className="flex flex-col gap-4 w-full mt-4">
        <div className="skeleton h-6 w-1/4"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-3/4"></div>
      </div>
    </div>
  );
};

export default PageLoading;