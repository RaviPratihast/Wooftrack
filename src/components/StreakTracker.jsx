import React from 'react';

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
      <div className="flex justify-center items-center text-black mb-4">
        <h3 className="font-semibold text-xs">march 2023</h3>
      </div>
      <div className="flex justify-around mb-2">
        {days.map((item) => (
          <div key={item.date} className="text-center">
            <div 
              className={`text-[11px] mb-0.5 font-medium text-black ${ 
                item.status === 'past' || item.status === 'future' ? 'text-opacity-70' : ''
              }`}
            >
              {item.day}
            </div>
            <div 
              className={`mt-1 w-8 h-8 flex items-center justify-center rounded-full text-[16px] font-bold cursor-pointer 
                          ${ item.status === 'active' 
                              ? 'bg-[#b9ff7d] text-black' 
                              : item.status === 'past' 
                                  ? 'text-[#e0f9ed] bg-[#53ca9a]' 
                                  : 'text-[#e0f9ed] bg-[#53ca9a]'
                          }
                          ${item.current ? '' : ''} // Ring for current day
                        `}
            >
              {item.date}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-1">
        {/* <ChevronDownIcon className="h-5 w-5 text-[#e0f9ed]" /> */}
        <img src="/Dropdown Icon.svg" alt="dropdown" className="h-5 w-5" /> 
      </div>
    </div>
  );
};

export default StreakTracker; 