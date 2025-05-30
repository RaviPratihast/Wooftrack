import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Action types
export const ADD_REMINDER = 'ADD_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';


const defaultInitialState = {
  reminders: [
    {
      id: '1',
      title: 'Morning Walk',
      pet: 'For Browny',
      time: '9:00am',
      frequency: 'Everyday',
      completed: false,
      category: 'General',
      notes: 'Around the park',
      startDate: '2023-10-01',
      endDate: null,
    },
    {
      id: '2',
      title: 'Evening Walk',
      pet: 'For Browny',
      time: '6:00pm',
      frequency: 'Everyday',
      completed: true,
      category: 'General',
      notes: '',
      startDate: '2023-10-01',
      endDate: null,
    },
    // ... add other default reminders if needed
  ]
};

// Reminder reducer (remains the same)
const reminderReducer = (state, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, { id: Date.now().toString(), ...action.payload, completed: false }]
      };
    case UPDATE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map(reminder => 
          reminder.id === action.payload.id ? { ...reminder, ...action.payload } : reminder
        )
      };
    case DELETE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.filter(reminder => reminder.id !== action.payload)
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        reminders: state.reminders.map(reminder => 
          reminder.id === action.payload ? { ...reminder, completed: !reminder.completed } : reminder
        )
      };
    default:
      return state;
  }
};

// Create context
const ReminderContext = createContext();

// Provider component
export const ReminderProvider = ({ children }) => {
  // Load initial state from localStorage or use default
  const loadInitialState = () => {
    try {
      const storedReminders = localStorage.getItem('wooftrackReminders');
      if (storedReminders) {
        return JSON.parse(storedReminders);
      }
    } catch (error) {
      console.error("Error loading reminders from localStorage:", error);
      // Fallback to default if parsing fails or item doesn't exist
    }
    return defaultInitialState; // Use default if nothing in localStorage or on error
  };

  const [state, dispatch] = useReducer(reminderReducer, loadInitialState());
  
  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('wooftrackReminders', JSON.stringify(state));
    } catch (error) {
      console.error("Error saving reminders to localStorage:", error);
    }
  }, [state]); // Dependency array ensures this runs when state changes
  
  // Action creators (remain the same)
  const addReminder = (reminder) => {
    dispatch({ type: ADD_REMINDER, payload: reminder });
  };
  const updateReminder = (reminder) => {
    dispatch({ type: UPDATE_REMINDER, payload: reminder });
  };
  const deleteReminder = (id) => {
    dispatch({ type: DELETE_REMINDER, payload: id });
  };
  const toggleComplete = (id) => {
    dispatch({ type: TOGGLE_COMPLETE, payload: id });
  };
  
  return (
    <ReminderContext.Provider value={{ 
      reminders: state.reminders,
      addReminder,
      updateReminder,
      deleteReminder,
      toggleComplete
    }}>
      {children}
    </ReminderContext.Provider>
  );
};

// Custom hook for using the reminder context (remains the same)
export const useReminders = () => {
  const context = useContext(ReminderContext);
  if (!context) {
    throw new Error('useReminders must be used within a ReminderProvider');
  }
  return context;
}; 