// src/app/components/CollaborationCard.jsx

import React from 'react';

const styles = {
  Card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Image: {
    width: '100px', // Fixed width
    height: '100px', // Fixed height
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  Title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333333',
  },
  Description: {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '8px',
    textAlign: 'center', // Center align the text
  },
  Info: {
    fontSize: '12px',
    color: '#999999',
    marginBottom: '8px',
  },
  ButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '16px', // Add space above the button container
  },
  RequestsInfo: {
    fontSize: '12px',
    color: '#333333',
  },
  HighestBid: {
    fontSize: '12px',
    color: '#333333',
  },
  Button: {
    cursor: 'pointer',
    width: '100px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '0',
    borderRadius: '24px',
    boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
    backgroundColor: '#027bff',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 600,
    outline: 'none',
  },
};

const CollaborationCard = ({ title, description, collaborationType, amount, imageUrl, requests, highestBid }) => {
  return (
    <div style={styles.Card}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.Image} />}
      <div style={styles.Title}>{title}</div>
      <div style={styles.Description}>{description}</div>
      {collaborationType === 'paid' && <div style={styles.Info}>Amount: ${amount}</div>}
      <div style={styles.ButtonContainer}>
        <button style={styles.Button}>Collaborate</button>
        <div style={styles.RequestsInfo}>{requests} requests</div>
        <div style={styles.HighestBid}>Highest bid: ${highestBid}</div>
      </div>
    </div>
  );
};

export default CollaborationCard;
