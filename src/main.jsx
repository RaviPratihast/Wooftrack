import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReminderProvider } from './context/ReminderContext'
import './index.css'
import App from './App.jsx'
import AddReminder from './components/AddReminder.jsx'
import EditReminder from './components/EditReminder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReminderProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-reminder" element={<AddReminder />} />
        <Route path="/edit/:id" element={<EditReminder />} />
      </Routes>
    </Router>
    </ReminderProvider>
  </StrictMode>,
)
