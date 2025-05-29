import React from 'react';

const GoalItem = ({ 
  title = "morning walk",
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-3 mb-3 flex items-center justify-between">
      <span className="text-gray-700">{title}</span>
     
    </div>
  );
};

export default GoalItem; 