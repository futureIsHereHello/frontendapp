import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon, ChatIcon, BellIcon, CalendarIcon, UsersIcon } from '@heroicons/react/outline';
import ScheduleCard from './ScheduleCard';

const styles = {
  Header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '72px',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    color: '#000000',
    zIndex: 10,
  },
  LeftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  RightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  InputContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '24px',
    padding: '0 8px',
    width: '638px',
  },
  Input: {
    width: '100%',
    height: '39px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: 'transparent',
    color: '#000000',
    fontSize: '14px',
    lineHeight: '19px',
    outline: 'none',
    padding: '0 8px',
  },
  IconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    color: '#000000',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s, color 0.3s',
  },
  IconButtonHover: {
    backgroundColor: '#ffa500',
    color: '#ffffff',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000000',
    textAlign: 'left',
    cursor: 'pointer', // Add cursor pointer to indicate clickable
  },
  ProfileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#606060',
  },
  Modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '16px',
    boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
    zIndex: 20,
  },
  Overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
};

const Header = () => {
  const [isHovered, setIsHovered] = useState({});
  const [showSchedule, setShowSchedule] = useState(false);
  const router = useRouter();

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  const handleCollaborationClick = () => {
    router.push('/collaborations'); // Navigate to the collaborations page
  };

  const handleMouseEnter = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: true }));
  };

  const handleMouseLeave = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: false }));
  };

  const handleTitleClick = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div style={styles.Header}>
      <div style={styles.LeftSection}>
        <span style={styles.Text} onClick={handleTitleClick}>Connected</span>
      </div>
      <div style={styles.InputContainer}>
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          style={styles.Input}
          placeholder="Enter search keywords"
        />
      </div>
      <div style={styles.RightSection}>
        <button
          style={isHovered.chat ? { ...styles.IconButton, ...styles.IconButtonHover } : styles.IconButton}
          onMouseEnter={() => handleMouseEnter('chat')}
          onMouseLeave={() => handleMouseLeave('chat')}
        >
          <ChatIcon className="w-5 h-5" />
        </button>
        <button
          style={isHovered.bell ? { ...styles.IconButton, ...styles.IconButtonHover } : styles.IconButton}
          onMouseEnter={() => handleMouseEnter('bell')}
          onMouseLeave={() => handleMouseLeave('bell')}
        >
          <BellIcon className="w-5 h-5" />
        </button>
        <button
          style={isHovered.calendar ? { ...styles.IconButton, ...styles.IconButtonHover } : styles.IconButton}
          onMouseEnter={() => handleMouseEnter('calendar')}
          onMouseLeave={() => handleMouseLeave('calendar')}
          onClick={toggleSchedule}
        >
          <CalendarIcon className="w-5 h-5" />
        </button>
        <button
          style={isHovered.users ? { ...styles.IconButton, ...styles.IconButtonHover } : styles.IconButton}
          onMouseEnter={() => handleMouseEnter('users')}
          onMouseLeave={() => handleMouseLeave('users')}
          onClick={handleCollaborationClick}
        >
          <UsersIcon className="w-5 h-5" />
        </button>
        <div style={styles.ProfileImage}></div>
      </div>
      {showSchedule && (
        <>
          <div style={styles.Overlay} onClick={toggleSchedule}></div>
          <div style={styles.Modal}>
            <ScheduleCard />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
