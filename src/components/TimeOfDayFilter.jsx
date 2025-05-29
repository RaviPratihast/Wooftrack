import React from 'react';

const TimeOfDayFilter = () => {
  return (
    <div className="flex justify-between items-center my-4 py-2">
      <div className="flex items-center">
        <img src="/Sun.png" alt="Time of day" className="h-5 w-5 mr-2 text-gray-600" />
        <span className="text-sm text-gray-600 font-medium">afternoon</span>
      </div>
      <button>
        <img src="/ArrowsLeftRight.png" alt="Filter" className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default TimeOfDayFilter; 