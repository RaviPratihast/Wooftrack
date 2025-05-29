import React from 'react';
import Header from './components/Header';
import StreakTracker from './components/StreakTracker';
import TimeOfDayFilter from './components/TimeOfDayFilter';
import ReminderCard from './components/ReminderCard';
import GoalItem from './components/GoalItem';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="p-4">
        <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <img src="/streakIcon.png" alt="Streak icon" className="h-4 w-4 mr-1" />
          your streaks
        </div>
        <StreakTracker />
        <TimeOfDayFilter />
        <ReminderCard /> 
        <ReminderCard />
        <h2>Pending Goals</h2> 
        <h2>Completed Goals</h2>
     <GoalItem />
      </main>
      <BottomNav />
    </div>
  );
};

export default App;
