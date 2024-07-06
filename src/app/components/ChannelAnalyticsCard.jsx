// src/components/ChannelAnalyticsCard.js

import React from 'react';

const styles = {
  Card: {
    width: '100%',
    height: '70px',
    backgroundColor: '#ebf6f9',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    marginBottom: '10px',
  },
  Content: {
    display: 'flex',
    alignItems: 'center',
  },
  Title: {
    color: '#323232',
    fontSize: '16px',
    // fontFamily: 'Work Sans',
    lineHeight: '20px',
  },
  Value: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'right',
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  ImageContainer: {
    width: '24px',
    height: '24px',
    marginRight:"10px",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  Overview: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#323232',
  }
};

const defaultProps = {
  subscribersImage: 'https://assets.api.uizard.io/api/cdn/stream/e41e1040-4f71-4ef0-a080-63d0493b962a.png',
  membersImage: 'https://path-to-members-icon.png',
  viewsImage: 'https://assets.api.uizard.io/api/cdn/stream/e0483986-2479-4ae6-963c-b7d249734f2e.png',
}

const Image = ({ image }) => (
  <div
    style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${image})`,
    }}
  />
);

const ChannelAnalyticsCard = () => {
  const Card = (props) => (
    <div style={{ ...styles.Card, backgroundColor: props.bgColor }}>
      <div style={styles.Content}>
        <Image image={props.image} />
        <div style={styles.Title}>{props.title}</div>
      </div>
      <div style={styles.Value}>{props.value}</div>
    </div>
  );

  return (
    <div style={styles.Container}>
      <div style={styles.Overview}>Channel Analytics</div>
      <Card title="Subscribers" value="+8.9% this week" image={defaultProps.subscribersImage} bgColor="#e0f7fa" />
      <Card title="Members" value="-2.4% this week" image={defaultProps.membersImage} bgColor="#e8f5e9" />
      <Card title="Views" value="+12.5% this week" image={defaultProps.viewsImage} bgColor="#e8f5e9" />
    </div>
  );
};

export default ChannelAnalyticsCard;
