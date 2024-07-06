import React, { useState, useEffect } from 'react';
import CollaborationCard from './CollaborationCard';
import CollaborationCardForm from './CollaborationCardForm';

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
  const [collaborations, setCollaborations] = useState([]);

  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/collaborate');
        const data = await response.json();
        setCollaborations(data.collaborations);
      } catch (error) {
        console.error('Error fetching collaborations:', error);
      }
    };

    fetchCollaborations();
  }, []);

  const addCollaboration = (collab) => {
    setCollaborations([...collaborations, collab]);
  };

  return (
    <div style={styles.Page}>
      <div style={styles.Heading}>Collaborations</div>
      <CollaborationCardForm addCollaboration={addCollaboration} />
      <div style={styles.Grid}>
        {collaborations.map((collab, index) => (
          collab && (
            <CollaborationCard
              key={index}
              title={collab.name}
              description={collab.description}
              collaborationType={collab.collaborationType}
              amount={collab.amount}
              imageUrl={collab.imageUrl}
              requests={collab.requests}
              highestBid={collab.highestBid}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
