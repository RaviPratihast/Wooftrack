import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReminders } from '../context/ReminderContext';

const EditReminder = () => {
  const navigate = useNavigate();
  const { id: reminderId } = useParams();
  const { reminders, updateReminder, deleteReminder } = useReminders();
  const [reminderToEdit, setReminderToEdit] = useState(null);
  const [isReminderSettingsOpen, setIsReminderSettingsOpen] = useState(true);
  const [reminderText, setReminderText] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [notesText, setNotesText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [frequency, setFrequency] = useState('Everyday');
  const [selectedPet, setSelectedPet] = useState('Browny');
  const [selectedCategory, setSelectedCategory] = useState('General');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const foundReminder = reminders.find(r => r.id === reminderId);
    if (foundReminder) {
      setReminderToEdit(foundReminder);
      setReminderText(foundReminder.title || '');
      setNotesText(foundReminder.notes || '');
      setStartDate(foundReminder.startDate || '');
      setReminderTime(foundReminder.time || '');
      setFrequency(foundReminder.frequency || 'Everyday');

      setSelectedPet(foundReminder.pet ? foundReminder.pet.replace('For ', '') : 'Browny');
      setSelectedCategory(foundReminder.category || 'General');
      setShowNotes(!!foundReminder.notes); 
    } else {
      navigate('/'); 
    }
  }, [reminderId, reminders, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleReminderSettings = () => {
    setIsReminderSettingsOpen(!isReminderSettingsOpen);
  };

  const handleReminderTextChange = (e) => {
    setReminderText(e.target.value);
    if (errors.reminderText) {
      setErrors(prev => ({...prev, reminderText: null}));
    }
  };
  
  const handleNotesTextChange = (e) => {
    setNotesText(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setReminderTime(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!reminderText.trim()) {
      newErrors.reminderText = 'Reminder title/description is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateReminder = () => {
    if (!validateForm() || !reminderToEdit) {
      return;
    }

    const updatedReminderData = {
      ...reminderToEdit, 
      title: reminderText,
      pet: `For ${selectedPet}`,
      time: reminderTime,
      frequency: frequency,
      category: selectedCategory,
      notes: notesText,
      startDate: startDate,
     
    };

    updateReminder(updatedReminderData);
    navigate('/');
  };

  const handleDeleteReminder = () => {
    if (window.confirm('Are you sure you want to delete this reminder?')) {
      deleteReminder(reminderId);
      navigate('/');
    }
  };

  if (!reminderToEdit) {

    return null; 
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-10">
      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-20 rounded-br-xl">
        <button onClick={handleBack} aria-label="Go back" className="cursor-pointer">
          <img src="/back button (1).svg" alt="Back" className="h-8 w-8" />
        </button>
        <h1 className="font-semibold text-sm text-neutral-800">Edit Reminder</h1>
        <div>
          <button onClick={handleUpdateReminder} className="text-[#019D6B] text-sm font-semibold px-2 py-1 cursor-pointer mr-2">Save Changes</button>
          <button onClick={handleDeleteReminder} className="text-red-600 text-sm font-semibold px-2 py-1 cursor-pointer">Delete</button>
        </div>
      </div>

      <div className="p-4 space-y-5">
      
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-2 block">Select Pet</label>
            <div className="mt-1 flex items-center bg-white p-[6px] rounded-lg border border-gray-200 shadow-sm">
              <img src="/puppyphoto.svg" alt="Pet" className="h-6 w-6 mr-2" />
              <span className="flex-grow text-[16px] font-bold text-neutral-700">{selectedPet}</span>
            
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-2 block">Select Category</label>
            <div className="mt-1 flex items-center bg-white p-[6px] rounded-lg border border-gray-200 shadow-sm">
              <img src="/foodbowl.svg" alt="Category" className="h-6 w-6 mr-2" />
              <span className="flex-grow text-[16px] font-bold text-neutral-700">{selectedCategory}</span>
             
            </div>
          </div>
        </div>

     
        <div className="bg-white rounded-xl shadow-sm">
          <div className="bg-neutral-800 text-white p-[10px] rounded-t-xl">
            <h3 className="font-semibold text-sm">Reminder Info</h3>
          </div>
          <div className="p-3 space-y-4">
            <div>
              <label htmlFor="reminderText" className="block text-[16px] font-medium text-neutral-700 mb-4 ml-4">Set a reminder for...</label>
              <div className="relative">
                <input
                  type="text"
                  id="reminderText"
                  value={reminderText}
                  onChange={handleReminderTextChange}
                  placeholder="Type here..."
                  className={`w-full p-3 border rounded-lg focus:ring-1 !text-[16px] ${errors.reminderText ? 'border-red-500 focus:ring-red-400 focus:border-red-500' : 'border-gray-300 focus:ring-[#02C878] focus:border-[#02C878]'}`}
                  maxLength={100}
                  aria-invalid={errors.reminderText ? "true" : "false"}
                  aria-describedby={errors.reminderText ? "reminderText-error" : undefined}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                  {reminderText.length}/100
                </span>
              </div>
              {errors.reminderText && <p id="reminderText-error" className="text-red-500 text-xs ml-4 mt-1">{errors.reminderText}</p>}
            </div>
            <div className="flex justify-between items-center pt-2">
              <label className="text-[16px] font-medium text-neutral-700">Add Notes (Optional)</label>
              {!showNotes && (
                <button onClick={() => setShowNotes(true)} className="text-[#02C878] text-[12px] font-medium cursor-pointer">Add</button>
              )}
            </div>
            {showNotes && (
              <div>
                <textarea
                  id="notesText"
                  value={notesText}
                  onChange={handleNotesTextChange}
                  placeholder="Add your notes here..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#02C878] focus:border-[#02C878] text-sm h-24 resize-none"
                  maxLength={200}
                ></textarea>
                 <div className="text-right text-xs text-gray-400">{notesText.length}/200</div>
              </div>
            )}
          </div>
        </div>

   
        <div className="bg-white rounded-xl shadow-sm">
          <button
            onClick={toggleReminderSettings}
            className="w-full bg-neutral-800 text-white p-[10px] flex justify-between items-center rounded-t-xl cursor-pointer"
            aria-expanded={isReminderSettingsOpen}
          >
            <h2 className="font-semibold !text-sm">Reminder Settings</h2>
            <img src="/uparrow.svg" alt="toggle" className={`h-8 w-8 transform transition-transform duration-200 ${isReminderSettingsOpen ? '' : 'rotate-180'}`} />
          </button>
          {isReminderSettingsOpen && (
            <div className="p-3 space-y-4 border-t-2 border-gray-50">
              {/* Start Date */}
              <div className="flex flex-col gap-3">
                <label htmlFor="startDate" className="block text-[16px] font-medium text-neutral-700 ml-4 mb-4">Start Date</label>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-300">
                  <input 
                    type="text" 
                    id="startDate" 
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="flex-grow bg-transparent focus:outline-none text-[16px] text-neutral-700 placeholder-gray-400" 
                    placeholder="DD.MM.YYY" 
                  />
                  <img src="/calendar.svg" alt="calendar" className="h-5 w-5 ml-2 cursor-pointer" />
                </div>
              </div>
             <div className="flex items-baseline gap-1">
             <span className="text-lg text-[#a2a2a2]  font-light">+</span> 
             <button className="text-[16px] text-[#a2a2a2] font-medium flex items-center py-1 cursor-pointer">
             Add End Date
               </button>
            </div>
              <hr className="border-gray-200"/>
            
              <div className="flex flex-col gap-3">
                <label htmlFor="reminderTime" className="block text-[16px] font-medium text-neutral-700">Reminder Time</label>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-300">
                  <input 
                    type="text" 
                    id="reminderTime" 
                    value={reminderTime}
                    onChange={handleTimeChange}
                    className="flex-grow bg-transparent focus:outline-none !text-[16px] text-neutral-700 placeholder-gray-400" 
                    placeholder="HH:MM am/pm" 
                  />
                  <img src="/Reminder Time Clock (1).svg" alt="clock" className="h-5 w-5 ml-2 cursor-pointer" />
                </div> 
              </div>
               <hr className="border-gray-200"/>
             
                <div className="flex flex-col gap-3">
                  <div className="ml-4 mb-3">
                    <label htmlFor="reminderFrequency" className="block text-[16px] font-medium text-neutral-700">Reminder Frequency</label>
                    <p className="text-sm text-gray-500">How often should this reminder repeat?</p>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-300">
                    <span className="flex-grow text-[16px] text-neutral-700">{frequency}</span>
                   
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditReminder; 