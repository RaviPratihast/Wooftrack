import React from 'react';
import { useReminders } from '../context/ReminderContext';

const ReminderCard = ({ 
  id,
  title = "Morning Walk", 
  pet = "For Browny", 
  time = "2:00pm", 
  frequency = "Everyday",
  completed
}) => {
  const { toggleComplete } = useReminders();

  const handleCardClick = () => {
    toggleComplete(id);
  };

  return (
    <div 
      className={`bg-white rounded-xl p-4 mb-4 shadow-sm cursor-pointer ${completed ? 'opacity-70' : ''}`}
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-center">
        <h3 className={`text-lg font-semibold ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{title}</h3>
        <img src="/expand-01.svg" alt="expand" className="h-4 w-4 opacity-70 cursor-pointer" />
      </div>
      
      <div className={`flex items-center gap-4 mt-3 ${completed ? 'text-gray-500' : 'text-gray-600'}`}>
        <div className="flex items-center gap-1">
          <img src="/paws.svg" alt="pet" className={`h-4 w-4 ${completed ? 'opacity-50' : 'opacity-70'}`} />
          <span className="text-xs">{pet}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <img src="/alarm-clock-check.svg" alt="time" className={`h-4 w-4 ${completed ? 'opacity-50' : 'opacity-70'}`} />
          <span className="text-xs">At {time}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <img src="/repeat-02.svg" alt="repeat" className={`h-4 w-4 ${completed ? 'opacity-50' : 'opacity-70'}`} />
          <span className="text-xs">{frequency}</span>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard; 