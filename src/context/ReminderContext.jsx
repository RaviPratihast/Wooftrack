import React, { createContext, useContext, useReducer } from 'react';

// Action types
export const ADD_REMINDER = 'ADD_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';


const initialState = {
  reminders: [
    {
      id: '1',
      title: 'Morning Walk',
      pet: 'For Browny',
      time: '2:00pm',
      frequency: 'Everyday',
      completed: false,
      category: 'General',
      notes: '',
      startDate: '23.02.2023',
      endDate: null,
    },
    {
      id: '2',
      title: 'Evening Walk',
      pet: 'For Browny',
      time: '6:00pm',
      frequency: 'Everyday',
      completed: false,
      category: 'General',
      notes: '',
      startDate: '23.02.2023',
      endDate: null,
    },
    {
      id: '3',
      title: 'Breakfast',
      pet: 'For Browny',
      time: '8:00am',
      frequency: 'Everyday',
      completed: false,
      category: 'Food',
      notes: '',
      startDate: '23.02.2023',
      endDate: null,
    },
    {
      id: '4',
      title: 'Lunch',
      pet: 'For Browny',
      time: '12:00pm',
      frequency: 'Everyday',
      completed: false,
      category: 'Food',
      notes: '',
      startDate: '23.02.2023',
      endDate: null,
    },
    {
      id: '5',
      title: 'Vet visit',
      pet: 'For Browny',
      time: '3:00pm',
      frequency: 'Once',
      completed: false,
      category: 'Health',
      notes: 'Annual checkup',
      startDate: '25.02.2023',
      endDate: null,
    },
    {
      id: '6',
      title: 'morning walk',
      pet: 'For Browny',
      time: '7:00am',
      frequency: 'Everyday',
      completed: true,
      category: 'General',
      notes: '',
      startDate: '22.02.2023',
      endDate: null,
    }
  ]
};


const reminderReducer = (state, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, { id: Date.now().toString(), ...action.payload }]
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


const ReminderContext = createContext();


export const ReminderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reminderReducer, initialState);
  

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


export const useReminders = () => {
  const context = useContext(ReminderContext);
  if (!context) {
    throw new Error('useReminders must be used within a ReminderProvider');
  }
  return context;
}; 