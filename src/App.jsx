import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import StreakTracker from './components/StreakTracker';
import TimeOfDayFilter from './components/TimeOfDayFilter';
import ReminderCard from './components/ReminderCard';
import GoalItem from './components/GoalItem';
import BottomNav from './components/BottomNav';
import { useReminders } from './context/ReminderContext';

const App = () => {
  const navigate = useNavigate();
  const { reminders } = useReminders();

  const handleAddReminderClick = () => {
    navigate('/add-reminder');
  };

  const pendingReminders = reminders.filter(reminder => !reminder.completed);
  const completedReminders = reminders.filter(reminder => reminder.completed);

  
  const getTimeSlot = (time) => {
    let hour = parseInt(time.split(':')[0]);
    const isPM = time.toLowerCase().includes('pm');
    
    if (isPM && hour !== 12) {
      hour += 12;
    } else if (!isPM && hour === 12) { // Midnight case
      hour = 0;
    }

    if (hour >= 5 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 17) return 'Afternoon';
    if (hour >= 17 && hour < 21) return 'Evening';
    return 'Night'; // Covers 9 PM to 4 AM
  };

  const groupedReminders = pendingReminders.reduce((acc, reminder) => {
    const slot = getTimeSlot(reminder.time);
    if (!acc[slot]) {
      acc[slot] = [];
    }
    acc[slot].push(reminder);
    return acc;
  }, {});

  const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Night'];

  return (
    <div className="bg-[#f3f4f6]">
      <Header />
      <main className="px-4 pb-20">
        <div className="flex items-center text-xs font-medium text-[#848586] mb-[10px]">
          <img src="/zap.svg" alt="Streak icon" className="h-4 w-4 mr-1" />
          your streaks
        </div>
        <StreakTracker />
        <TimeOfDayFilter />
        
        {timeSlots.map(slot => (
          <div key={slot} className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{slot}</h2>
            {(groupedReminders[slot] && groupedReminders[slot].length > 0) ? (
              groupedReminders[slot].map(reminder => (
                <ReminderCard 
                  key={reminder.id}
                  id={reminder.id}
                  title={reminder.title}
                  pet={reminder.pet}
                  time={reminder.time}
                  frequency={reminder.frequency}
                  completed={reminder.completed}
                />
              ))
            ) : (
              <p className="text-sm text-gray-500">No reminders for {slot.toLowerCase()}.</p>
            )}
          </div>
        ))}
        
        {completedReminders.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Completed Goals</h2>
            {completedReminders.map(reminder => (
              <GoalItem 
                key={reminder.id} 
                id={reminder.id}
                title={reminder.title} 
              />
            ))}
          </div>
        )}
        
        <div className="fixed bottom-24 right-6 z-10">
          <button 
            onClick={handleAddReminderClick}
            className="bg-[#019D6B] text-white p-3.5 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02C878] cursor-pointer"
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
