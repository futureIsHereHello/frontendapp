import React from 'react';

const styles = {
  Card: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    width: '100%',
    height: '79px',
    borderRadius: '32px',
    marginBottom: '10px',
  },
  Image: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  TextContainer: {
    flex: 1,
  },
  Title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#000000', // Change to black
  },
  Subtitle: {
    fontSize: '12px',
    color: '#000000', // Change to black
  },
  Category: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '20px',
    color: '#000000', // Change to black
  },
  Stats: {
    display: 'flex',
    alignItems: 'center',
  },
  StatValue: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '10px',
    color: '#000000', // Change to black
  },
  StatChange: {
    fontSize: '14px',
  },
  Increase: {
    color: 'green',
  },
  Decrease: {
    color: 'red',
  },
};

const StatsBar = ({ image, title, subtitle, category, statValue, statChange, increase, backgroundColor }) => {
  return (
    <div style={{ ...styles.Card, backgroundColor }}>
      <img src={image} alt="icon" style={styles.Image} />
      <div style={styles.TextContainer}>
        <div style={styles.Title}>{title}</div>
        <div style={styles.Subtitle}>{subtitle}</div>
      </div>
      <div style={styles.Category}>{category}</div>
      <div style={styles.Stats}>
        <div style={styles.StatValue}>{statValue}</div>
        <div style={{ ...styles.StatChange, color: increase ? 'green' : 'red' }}>
          {increase ? '↑' : '↓'} {statChange}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
