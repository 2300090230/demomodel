import React from "react";

export default function LoadingRing({ text = "Loading amazing content..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-60 border-solid mb-4"></div>
      <div className="text-blue-700 font-medium text-lg">{text}</div>
    </div>
  );
}