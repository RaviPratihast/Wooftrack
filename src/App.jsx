import React from 'react';
import Header from './components/Header';
import StreakTracker from './components/StreakTracker';
import ReminderCard from './components/ReminderCard';
import GoalItem from './components/GoalItem';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <StreakTracker />
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
