import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon, ChatIcon, BellIcon, CalendarIcon, UsersIcon } from '@heroicons/react/outline';
import Modal from 'react-modal';
import ScheduleCard from './ScheduleCard';
import { Login, Signup } from './authenticationPage';
import Cookies from 'js-cookie';
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
    cursor: 'pointer',
  },
  ProfileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#606060',
    cursor: 'pointer',
  },
  ModalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    height: '400px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  CloseButton: {
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#000',
    padding: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  ToggleButton: {
    cursor: 'pointer',
    backgroundColor: '#ffa500',
    color: '#ffffff',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '22px',
    border: 'none',
    outline: 'none',
    marginTop: '20px',
    textAlign: 'center',
  }
};

const Header = () => {
  const [isHovered, setIsHovered] = useState({});
  const [showSchedule, setShowSchedule] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    //if you want to use localStorage instead of Cookies
    // const userId = localStorage.getItem('userId');
    // const username = Cookies.get("username")

    // if (username) {
    //   // const username = localStorage.getItem('username');
    //   setWelcomeMessage(`Welcome, ${username}`);
    // }
    const username = Cookies.get('username');
    if (username) {
      setWelcomeMessage(`Welcome, ${username}`);
    }
    
  }, []);

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  const handleCollaborationClick = () => {
    router.push('/collaborations');
  };

  const handleMouseEnter = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: true }));
  };

  const handleMouseLeave = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: false }));
  };

  const handleTitleClick = () => {
    router.push('/');
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div style={styles.Header}>
      <div style={styles.LeftSection}>
        <span style={styles.Text} onClick={handleTitleClick}>Connected</span>
      </div>
      <div style={styles.InputContainer}>
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input style={styles.Input} placeholder="Enter search keywords" />
      </div>
      <div style={styles.RightSection}>
        {welcomeMessage && <span style={styles.Text}>{welcomeMessage}</span>}
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
        <div style={styles.ProfileImage} onClick={openModal}></div>
      </div>
      {showSchedule && (
        <>
          <div style={styles.Overlay} onClick={toggleSchedule}></div>
          <div style={styles.Modal}>
            <ScheduleCard />
          </div>
        </>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login/Signup"
        style={{ overlay: { zIndex: 1000 } }}
      >
        <div style={styles.ModalContent}>
          <button style={styles.CloseButton} onClick={closeModal}>X</button>
          {isLogin ? (
            <Login
              setToken={(token) => {
                console.log('Set token:', token);
                closeModal();
              }}
              closeModal={closeModal}
              setWelcomeMessage={setWelcomeMessage}
            />
          ) : (
            <Signup
              setToken={(token) => {
                console.log('Set token:', token);
                closeModal();
              }}
              closeModal={closeModal}
              setWelcomeMessage={setWelcomeMessage}
              toggleToLogin={toggleToLogin}
            />
          )}
          <button style={styles.ToggleButton} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
