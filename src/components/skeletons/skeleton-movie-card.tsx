import React from 'react';

const SkeletonMovieCard = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-md p-4">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded mb-2" />
      <div className="h-4 bg-gray-300 rounded" />
    </div>
  );
};

export default SkeletonMovieCard;