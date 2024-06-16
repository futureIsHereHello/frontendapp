// src/app/components/Collaboration.jsx

import React from 'react';
import CollaborationCard from './CollaborationCard';

const styles = {
  Page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9', // light background
    height: '100vh', // full height
  },
  Heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  Grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(264px, 1fr))',
    gap: '20px',
    width: '100%',
    justifyContent: 'center', // centers the grid
  },
};

const Collaborations = () => {
  const collaborations = [
    { title: 'Collaboration 1', description: 'Description for collaboration 1', collaborationType: 'paid', amount: '100', imageUrl: 'https://via.placeholder.com/100', requests: 5, highestBid: 150 },
    { title: 'Collaboration 2', description: 'Description for collaboration 2', collaborationType: 'unpaid', amount: '', imageUrl: 'https://via.placeholder.com/100', requests: 2, highestBid: 0 },
    { title: 'Collaboration 3', description: 'Description for collaboration 3', collaborationType: 'paid', amount: '200', imageUrl: 'https://via.placeholder.com/100', requests: 8, highestBid: 250 },
  ];

  return (
    <div style={styles.Page}>
      <div style={styles.Heading}>Collaborations</div>
      <div style={styles.Grid}>
        {collaborations.map((collab, index) => (
          <CollaborationCard
            key={index}
            title={collab.title}
            description={collab.description}
            collaborationType={collab.collaborationType}
            amount={collab.amount}
            imageUrl={collab.imageUrl}
            requests={collab.requests}
            highestBid={collab.highestBid}
          />
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
