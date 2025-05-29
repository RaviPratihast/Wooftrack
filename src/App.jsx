import React from 'react';
import Header from './components/Header';
import StreakTracker from './components/StreakTracker';
import TimeOfDayFilter from './components/TimeOfDayFilter';
import ReminderCard from './components/ReminderCard';
import GoalItem from './components/GoalItem';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <Header />
      <main className="p-4 pb-20">
        <div className="flex items-center text-sm font-medium text-[#848586] mb-[10px] border border-red-500">
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
        
        <div className="mt-6 mb-2 text-gray-700 font-medium">
          pending goals
        </div>
        
        <ReminderCard 
          title="Vet visit" 
          pet="For Browny" 
          time="2:00pm" 
          frequency="Everyday" 
        />
        
        <div className="mt-6 mb-2 text-[#858687] font-medium">
          completed goals
        </div>
        
        <GoalItem title="morning walk" />
        
        <div className="fixed bottom-8 right-4 z-10">
          <button 
            className="bg-[#24aa7f] text-white p-3.5 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02C878]"
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
