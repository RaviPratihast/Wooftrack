import React from 'react';

const BottomNav = () => {
  const navItems = [
    { id: 'home', icon: '/Home.svg', label: 'Home' },
    { id: 'wishlist', icon: '/wishlist.svg', label: 'Wishlist' },
    { id: 'reminders', icon: '/menu.svg', label: 'Reminders', active: true },
    { id: 'dog', icon: '/dog.svg', label: 'Dog' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-top p-2 flex justify-around items-center border-t border-gray-200">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`flex  items-center justify-center gap-1 p-2 rounded-lg focus:outline-none cursor-pointer 
                      ${item.active ? 'bg-neutral-800 text-white w-auto px-4' : 'text-gray-500'}`}
          aria-label={item.label}
        >
          <img src={item.icon} alt={item.label} className={`h-6 w-6 ${item.active ? 'brightness-0 invert' : ''}`} />
          {item.active && <span className="text-xs">{item.label}</span>}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav; 