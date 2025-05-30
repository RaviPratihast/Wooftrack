import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddReminder = () => {
  const navigate = useNavigate();
  const [isReminderSettingsOpen, setIsReminderSettingsOpen] = useState(true);
  const [reminderText, setReminderText] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [notesText, setNotesText] = useState('');

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const toggleReminderSettings = () => {
    setIsReminderSettingsOpen(!isReminderSettingsOpen);
  };

  const handleReminderTextChange = (e) => {
    setReminderText(e.target.value);
  };
  
  const handleNotesTextChange = (e) => {
    setNotesText(e.target.value);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-10"> {/* Added pb-10 for some bottom spacing */}
      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-20 rounded-br-xl">
        <button onClick={handleBack} aria-label="Go back">
          <img src="/back button (1).svg" alt="Back" className="h-8 w-8" />
        </button>
        <h1 className="font-semibold text-sm text-neutral-800">Add Reminder</h1>
        <button className="text-[#019D6B] text-sm font-semibold px-2 py-1">Save</button>
      </div>

      <div className="p-4 space-y-5">
        {/* Select Pet & Category */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-2 block">Select Pet</label>
            <div className="mt-1 flex items-center bg-white p-[6px] rounded-lg border border-gray-200 shadow-sm">
              <img src="/puppyphoto.svg" alt="Pet" className="h-6 w-6 mr-2" />
              <span className="flex-grow text-[16px] font-bold text-neutral-700">Browny</span>
              <img src="/Reminder Frequency Chevron Container (1).svg" alt="dropdown" className="h-4 w-4" />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-2 block">Select Category</label>
            <div className="mt-1 flex items-center bg-white p-[6px] rounded-lg border border-gray-200 shadow-sm">
              <img src="/foodbowl.svg" alt="Category" className="h-6 w-6 mr-2" />
              <span className="flex-grow text-[16px] font-bold text-neutral-700">General</span>
              <img src="/Reminder Frequency Chevron Container (1).svg" alt="dropdown" className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Reminder Info */}
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#02C878] focus:border-[#02C878] !text-[16px]"
                  maxLength={100}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                  {reminderText.length}/100
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <label className="text-[16px] font-medium text-neutral-700">Add Notes (Optional)</label>
              {!showNotes && (
                <button onClick={() => setShowNotes(true)} className="text-[#02C878] text-[12px] font-medium">Add</button>
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

        {/* Reminder Settings */}
        <div className="bg-white rounded-xl shadow-sm">
          <button
            onClick={toggleReminderSettings}
            className="w-full bg-neutral-800 text-white p-[10px] flex justify-between items-center rounded-t-xl"
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
                  <input type="text" id="startDate" defaultValue="23.02.205" className="flex-grow bg-transparent focus:outline-none text-[16px] text-neutral-700 placeholder-gray-400" placeholder="DD.MM.YYY" />
                  <img src="/calendar.svg" alt="calendar" className="h-5 w-5 ml-2" />
                </div>
              </div>
             <div className="flex items-baseline gap-1">
             <span className="text-lg text-[#a2a2a2]  font-light">+</span> 
             <button className="text-[16px] text-[#a2a2a2] font-medium flex items-center py-1">
             Add End Date
               </button>
               
            </div>
              <hr className="border-gray-200"/>
              {/* Reminder Time */}
              <div className="flex flex-col gap-3">
                <label htmlFor="reminderTime" className="block text-[16px] font-medium text-neutral-700">Reminder Time</label>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-300">
                  <input type="text" id="reminderTime" defaultValue="12:06 pm" className="flex-grow bg-transparent focus:outline-none !text-[16px] text-neutral-700 placeholder-gray-400" placeholder="HH:MM am/pm" />
                  <img src="/Reminder Time Clock (1).svg" alt="clock" className="h-5 w-5 ml-2" />
                </div> 
              </div>
               <hr className="border-gray-200"/>
              {/* Reminder Frequency */}
              <div className="flex flex-col gap-3">
                <div className="ml-4 mb-3">
                  <label htmlFor="reminderFrequency" className="block text-[16px] font-medium text-neutral-700">Reminder Frequency</label>
                  <p className="text-sm text-gray-500">How often should this reminder repeat?</p>
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-300">
                  <span className="flex-grow text-[16px] text-neutral-700">Everyday</span>
                  <img src="/Reminder Frequency Chevron Container (1).svg" alt="dropdown" className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddReminder; 