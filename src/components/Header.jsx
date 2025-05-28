import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-xl font-semibold">daily reminders</h1>
      <button className="text-sm text-gray-600">view all</button>
    </header>
  );
};

export default Header; 