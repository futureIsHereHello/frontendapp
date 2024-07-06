// src/app/components/UserCard.jsx

import React from 'react';
import { useRouter } from 'next/navigation';

const styles = {
  Card: {
    cursor: 'pointer',
    width: '250px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ImageContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '10px',
  },
  Name: {
    color: '#030303',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '18px',
  },
  Handle: {
    color: '#7d8188',
    fontSize: '12px',
    lineHeight: '18px',
    marginBottom: '16px',
  },
  Stats: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: '12px',
    fontWeight: 500,
  },
  Stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#030303',
  },
  StatValue: {
    fontSize: '14px',
    fontWeight: 700,
  },
  StatLabel: {
    color: '#7d8188',
    fontSize: '12px',
    lineHeight: '16px',
  },
};

const defaultProps = {
  name: 'Jakob Botosh',
  handle: '@jakobbtsh',
  image: 'https://assets.api.uizard.io/api/cdn/stream/5e4d87ed-d1b6-4086-83b6-a86f53fb79de.png',
  stats: {
    followers: '2.3k',
    following: '235',
    posts: '80',
  },
};

const UserCard = ({ name, handle, image, stats = defaultProps.stats }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/user/profile'); // Redirect to the profile page
  };

  return (
    <div style={styles.Card} onClick={handleClick}>
      <div
        style={{
          ...styles.ImageContainer,
          backgroundImage: `url(${image ?? defaultProps.image})`,
        }}
      />
      <div style={styles.Name}>{name ?? defaultProps.name}</div>
      <div style={styles.Handle}>{handle ?? defaultProps.handle}</div>
      <div style={styles.Stats}>
        <div style={styles.Stat}>
          <div style={styles.StatValue}>{stats.followers ?? defaultProps.stats.followers}</div>
          <div style={styles.StatLabel}>Followers</div>
        </div>
        <div style={styles.Stat}>
          <div style={styles.StatValue}>{stats.following ?? defaultProps.stats.following}</div>
          <div style={styles.StatLabel}>Following</div>
        </div>
        <div style={styles.Stat}>
          <div style={styles.StatValue}>{stats.posts ?? defaultProps.stats.posts}</div>
          <div style={styles.StatLabel}>Posts</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
