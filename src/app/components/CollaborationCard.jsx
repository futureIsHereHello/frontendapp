import React, { useState } from 'react';

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
    width: '100px',
    height: '100px',
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
    textAlign: 'center',
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
    marginTop: '16px',
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
  const [collaborate, setCollaborate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      collaborationType,
      amount,
      imageUrl,
      requests,
      highestBid,
      collaborate,
    };

    try {
      const response = await fetch('http://localhost:5001/api/collaborate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Collaboration data submitted successfully');
      } else {
        console.error('Failed to submit collaboration data');
      }
    } catch (error) {
      console.error('Error submitting collaboration data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.Card}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.Image} />}
      <div style={styles.Title}>{title}</div>
      <div style={styles.Description}>{description}</div>
      {collaborationType === 'paid' && <div style={styles.Info}>Amount: ${amount}</div>}
      <div style={styles.ButtonContainer}>
        <button type="submit" style={styles.Button} onClick={() => setCollaborate(true)}>
          Collaborate
        </button>
        <div style={styles.RequestsInfo}>{requests} requests</div>
        <div style={styles.HighestBid}>Highest bid: ${highestBid}</div>
      </div>
    </form>
  );
};

export default CollaborationCard;
