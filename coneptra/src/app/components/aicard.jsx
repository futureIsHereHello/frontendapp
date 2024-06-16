'use client';

import React from 'react';

const styles = {
  Card: {
    top: '92px',
    left: '259px',
    width: '100%',
    height: '50px',
    backgroundColor: '#f5f5f5', // Light grey background
    borderRadius: '24px',
  },
  Input: {
    backgroundColor: '#f5f5f5', // Light grey background
    color: '#000000', // Black text color
    placeholderColor: '#9CA3AF', // Grey placeholder color
  },
  Button: {
    backgroundColor: 'transparent',
    color: '#000000', // Black icon color
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover effect
  },
  ButtonHover: {
    backgroundColor: '#ffa500', // Orange hover background
    color: '#ffffff', // White icon color on hover
  },
};

function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

export default function Card() {
  return (
    <div style={styles.Card} className="ml-0">
      <div className="relative">
        <input
          type="text"
          placeholder="Generate AI Post..."
          className="w-full py-4 pl-4 pr-16 rounded-full shadow-md transition-all focus:pr-20 focus:pl-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={styles.Input}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 mr-4 rounded-full p-2"
          style={styles.Button}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.Button, ...styles.ButtonHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.Button)}
        >
          <MicroscopeIcon className="w-6 h-6" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
}
