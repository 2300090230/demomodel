import React from "react";

export default function CardSkeleton({ count = 3 }) {
  return (
    <div>
      {[...Array(count)].map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow mb-6 p-6 animate-pulse flex flex-col gap-4"
        >
          <div className="h-6 bg-blue-100 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-blue-100 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-blue-100 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}