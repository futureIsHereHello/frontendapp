import React from 'react';

const styles = {
  Card: {
    width: '263px',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '17px',
    padding: '16px',
    marginBottom: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  UserInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  UserImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  UserName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000000',
  },
  UserAction: {
    fontSize: '12px',
    color: '#000000',
  },
  Comment: {
    fontSize: '14px',
    margin: '10px 0',
    color: '#000000',
  },
  TimeAgo: {
    fontSize: '12px',
    color: '#000000',
    marginBottom: '10px',
  },
  Actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ActionIcon: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
};

const defaultImage = 'https://randomuser.me/api/portraits/men/1.jpg';

const ActivityCard = ({ userImage = defaultImage, userName, action, comment, timeAgo }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.UserInfo}>
        <div
          style={{
            ...styles.UserImage,
            backgroundImage: `url(${userImage})`,
          }}
        />
        <div>
          <div style={styles.UserName}>{userName}</div>
          <div style={styles.UserAction}>{action}</div>
        </div>
      </div>
      <div style={styles.Comment}>{comment}</div>
      <div style={styles.TimeAgo}>{timeAgo}</div>
      <div style={styles.Actions}>
        <svg style={styles.ActionIcon} fill="#555" viewBox="0 0 24 24">
          {/* Heart Icon */}
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg style={styles.ActionIcon} fill="#555" viewBox="0 0 24 24">
          {/* Share Icon */}
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.12-4.11c.53.5 1.21.82 1.97.82 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.91 10.3c-.53-.5-1.21-.82-1.97-.82-1.66 0-3 1.34-3 3s1.34 3 3 3c.76 0 1.44-.3 1.96-.77l7.13 4.15c-.05.21-.09.44-.09.67 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
        </svg>
        <svg style={styles.ActionIcon} fill="#555" viewBox="0 0 24 24">
          {/* More Icon */}
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
    </div>
  );
};

export default ActivityCard;
