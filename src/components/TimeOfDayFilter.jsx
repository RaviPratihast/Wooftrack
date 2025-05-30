import React from 'react';

const TimeOfDayFilter = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center">
        <img src="/Sun.svg" alt="Time of day" className="h-4 w-4 mr-2 text-gray-600" />
        <span className="text-sm text-gray-600 font-medium">afternoon</span>
      </div>
      <button className="cursor-pointer">
        <img src="/ArrowsLeftRight.svg" alt="Filter" className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default TimeOfDayFilter; 