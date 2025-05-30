import React from 'react';
import { useReminders } from '../context/ReminderContext';

const GoalItem = ({ 
  id,
  title = "morning walk",
  completed = true
}) => {
  const { toggleComplete } = useReminders();

  const handleToggleComplete = () => {
    toggleComplete(id);
  };

  return (
    <div 
      className={`rounded-xl p-3 mb-3 flex items-center justify-between cursor-pointer ${completed ? 'bg-[#D9D9D9]' : 'bg-gray-100'}`}
      onClick={handleToggleComplete}
    >
      <span className={`flex-grow ${completed ? 'text-[#8b8b8b] line-through' : 'text-gray-700'}`}>{title}</span>
      {completed && (
        <img src="/Completed Icon.svg" alt="Completed" className="h-5 w-5 ml-2" />
      )}
    </div>
  );
};

export default GoalItem; 