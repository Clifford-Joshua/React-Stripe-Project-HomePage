import React from "react";

const Loader = (animate) => {
  return (
    <div
      style={{
        width: `${animate.width}px`,
        minHeight: `${animate.height}px`,
      }}
      className="rounded-[20px] overflow-hidden relative bg-white"
    >
      <div className="h-full w-full animate-pulse p-4 flex flex-col justify-between gap-4">
        {/* Header row */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-3/4 bg-gray-300 rounded" />
            <div className="h-3 w-1/2 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Multiple shimmer blocks to mimic transaction cards */}
        <div className="flex flex-col  gap-[1rem]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-[10px]  p-4 space-y-2 bg-gray-100">
              <div className="h-3 w-2/3 bg-gray-300 rounded" />
              <div className="h-3 w-full bg-gray-300 rounded" />
              <div className="h-3 w-1/2 bg-gray-300 rounded" />
              <div className="h-3 w-1/2 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
