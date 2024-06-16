'use client';

import React from 'react';
import { ThumbUpIcon, UserIcon, ChatIcon, ShareIcon } from '@heroicons/react/outline';

const styles = {
  Card: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f5f5f5', // Light grey background
    borderRadius: '24px',
    padding: '16px',
    color: '#000000', // Black text color
    marginBottom: '5px',
  },
  Header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  ProfileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginRight: '16px',
  },
  TitleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '21px',
    color: '#000000', // Black text color
  },
  Subtitle: {
    fontSize: '14px',
    color: '#7d7d7d', // Dark grey text color
  },
  Content: {
    fontSize: '14px',
    lineHeight: '21px',
    marginBottom: '16px',
    color: '#000000', // Black text color
  },
  ImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px', // Add some spacing between images if needed
    marginBottom: '16px',
  },
  Image: {
    width: '48%', // Adjust as needed to fit within the container
    height: '200px',
    borderRadius: '24px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  Footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  Button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    borderRadius: '24px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover effect
  },
  ButtonHover: {
    backgroundColor: '#ffa500', // Orange hover background
    color: '#ffffff', // White text color on hover
  },
  ButtonText: {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#000000', // Black text color
  },
};

const FeedCard = ({ profileImage, title, subtitle, content, images = [] }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.Header}>
        <div style={{ ...styles.ProfileImage, backgroundImage: `url(${profileImage})` }}></div>
        <div style={styles.TitleContainer}>
          <span style={styles.Title}>{title}</span>
          <span style={styles.Subtitle}>{subtitle}</span>
        </div>
      </div>
      <div style={styles.Content}>{content}</div>
      <div style={styles.ImagesContainer}>
        {images.map((image, index) => (
          <div key={index} style={{ ...styles.Image, backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
      <div style={styles.Footer}>
        <div
          style={styles.Button}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.Button, ...styles.ButtonHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.Button)}
        >
          <ThumbUpIcon className="w-5 h-5" />
          <span style={styles.ButtonText}>Portf</span>
        </div>
        <div
          style={styles.Button}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.Button, ...styles.ButtonHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.Button)}
        >
          <UserIcon className="w-5 h-5" />
          <span style={styles.ButtonText}>Connect</span>
        </div>
        <div
          style={styles.Button}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.Button, ...styles.ButtonHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.Button)}
        >
          <ChatIcon className="w-5 h-5" />
          <span style={styles.ButtonText}>Engage</span>
        </div>
        <div
          style={styles.Button}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.Button, ...styles.ButtonHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.Button)}
        >
          <ShareIcon className="w-5 h-5" />
          <span style={styles.ButtonText}>Prom</span>
        </div>
        <div
          style={styles.Button}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.Button, ...styles.ButtonHover })}
          onMouseLeave={(e) => (e.currentTarget.style = styles.Button)}
        >
          <ShareIcon className="w-5 h-5" />
          <span style={styles.ButtonText}>Share</span>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
