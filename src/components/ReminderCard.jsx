import React from 'react';

const ReminderCard = ({ 
  title = "Morning Walk", 
  pet = "For Browny", 
  time = "2:00pm", 
  frequency = "Everyday" 
}) => {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <img src="/expand-01.svg" alt="expand" className="h-5 w-5 opacity-70" />
      </div>
      
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1">
          <img src="/paws.svg" alt="pet" className="h-4 w-4 opacity-70" />
          <span className="text-sm text-gray-600">{pet}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <img src="/alarm-clock-check.svg" alt="time" className="h-4 w-4 opacity-70" />
          <span className="text-sm text-gray-600">At {time}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <img src="/repeat-02.svg" alt="repeat" className="h-4 w-4 opacity-70" />
          <span className="text-sm text-gray-600">{frequency}</span>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard; 