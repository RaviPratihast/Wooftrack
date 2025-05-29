import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 

const StreakTracker = () => {

  const days = [
    { day: 'Mo', date: '26', status: 'past' }, 
    { day: 'Tu', date: '27', status: 'past' },
    { day: 'We', date: '28', status: 'active' }, 
    { day: 'Th', date: '29', status: 'active' },
    { day: 'Fr', date: '30', status: 'active', current: true }, 
    { day: 'Sa', date: '4', status: 'future' }, 
    { day: 'Su', date: '2', status: 'future' },
  ];

  return (
    <div className="bg-[#02c878] p-4 rounded-lg text-white shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm">march 2023</h3>
      </div>
      <div className="flex justify-around mb-2">
        {days.map((item) => (
          <div key={item.date} className="text-center">
            <div 
              className={`text-xs mb-0.5 font-medium ${ 
                item.status === 'past' || item.status === 'future' ? 'text-[#e0f9ed]' : 'text-white'
              }`}
            >
              {item.day}
            </div>
            <div 
              className={`mt-1 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold 
                          ${ item.status === 'active' 
                              ? 'bg-[#b9ff7d] text-[#02a064]' 
                              : item.status === 'past' 
                                  ? 'text-[#e0f9ed] bg-[#02c878]' 
                                  : 'text-[#e0f9ed] bg-[#02c878]'
                          }
                          ${item.current ? 'ring-2 ring-[#e0f9ed]' : ''} // Ring for current day
                        `}
            >
              {item.date}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-1">
        <ChevronDownIcon className="h-5 w-5 text-[#e0f9ed]" /> 
      </div>
    </div>
  );
};

export default StreakTracker; 