import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import StreakTracker from './components/StreakTracker';
import TimeOfDayFilter from './components/TimeOfDayFilter';
import ReminderCard from './components/ReminderCard';
import GoalItem from './components/GoalItem';
import BottomNav from './components/BottomNav';

const App = () => {
  const navigate = useNavigate();

  const handleAddReminderClick = () => {
    navigate('/add-reminder');
  };

  return (
    <div className="bg-[#f3f4f6]">
      <Header />
      <main className="px-4   pb-20">
        <div className="flex items-center text-xs font-medium text-[#848586] mb-[10px]">
          <img src="/zap.svg" alt="Streak icon" className="h-4 w-4 mr-1" />
          your streaks
        </div>
        <StreakTracker />
        <TimeOfDayFilter />
        
        <ReminderCard 
          title="Morning Walk" 
          pet="For Browny" 
          time="2:00pm" 
          frequency="Everyday" 
        />
        <ReminderCard 
          title="Evening Walk" 
          pet="For Browny" 
          time="2:00pm" 
          frequency="Everyday" 
        />
        <ReminderCard 
          title="Breakfast" 
          pet="For Browny" 
          time="2:00pm" 
          frequency="Everyday" 
        />
        <ReminderCard 
          title="Lunch" 
          pet="For Browny" 
          time="2:00pm" 
          frequency="Everyday" 
        />
        
        <div className="mt-4 mb-4 text-gray-700 font-medium">
          pending goals
        </div>
        
        <ReminderCard 
          title="Vet visit" 
          pet="For Browny" 
          time="2:00pm" 
          frequency="Everyday" 
        />
        
        <div className="mt-4 mb-4 text-[#858687] font-medium text-xs">
          completed goals
        </div>
        
        <GoalItem title="morning walk" />
        
        <div className="fixed bottom-24 right-6 z-10">
          <button 
            onClick={handleAddReminderClick}
            className="bg-[#019D6B] text-white p-3.5 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02C878]"
            aria-label="Add new goal"
          >
            <img src="/addIcon.svg" alt="Add goal" className="h-6 w-6" />
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default App;
