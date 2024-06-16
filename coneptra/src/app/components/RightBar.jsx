import React from 'react';

const styles = {
  Card: {
    position: 'fixed',
    top: '64px', // Adjust top to account for the header height
    right: '0px',
    width: '15%',
    height: 'calc(100vh - 64px)', // Full height minus the header height
    backgroundColor: '#f5f5f5', // Light grey background
    borderRadius: '24px 0 0 24px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    overflowY: 'auto', // Enable scrolling if content overflows
    zIndex: 10, // Ensure it is above other elements
  },
  Section: {
    marginBottom: '16px',
  },
  Heading: {
    color: '#6b7280', // Grey text color for heading
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '21px',
    marginBottom: '8px', // Add bottom margin for spacing
  },
  ItemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    cursor: 'pointer', // Change cursor to pointer to indicate clickable items
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover effect
    padding: '4px', // Add padding for hover effect
    borderRadius: '8px', // Rounded corners for items
  },
  ItemHover: {
    backgroundColor: '#ffa500', // Orange hover background
    color: '#ffffff', // White text on hover
  },
  Image: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    marginRight: '12px',
  },
  Title: {
    color: '#000000', // Black text color
    fontSize: '14px',
    lineHeight: '21px',
  },
  Subtitle: {
    color: '#6b7280', // Grey text color for subtitle
    fontSize: '12px',
    lineHeight: '16px',
  },
};

const Item = ({ image, title, subtitle }) => (
  <div
    style={styles.ItemContainer}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#ffa500';
      e.currentTarget.style.color = '#ffffff';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '';
      e.currentTarget.style.color = '#000000';
    }}
  >
    <div style={{ ...styles.Image, backgroundImage: `url(${image})` }}></div>
    <div>
      <div style={styles.Title}>{title}</div>
      {subtitle && <div style={styles.Subtitle}>{subtitle}</div>}
    </div>
  </div>
);

const Section = ({ heading, items }) => (
  <div style={styles.Section}>
    <div style={styles.Heading}>{heading}</div>
    {items.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </div>
);

const RightBar = () => {
  const communityChats = [
    { image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Pet Owners', subtitle: 'Connect with pet lovers' },
    { image: 'https://images.unsplash.com/photo-1517153901655-e4d9f0a37d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Pet Owners', subtitle: 'Connect with pet lovers' },
    { image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Pet Owners', subtitle: 'Connect with pet lovers' },
  ];

  const collaborationChats = [
    { image: 'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Portfolio showcase', subtitle: 'Show your work' },
    { image: 'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Portfolio showcase', subtitle: 'Show your work' },
    { image: 'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Portfolio showcase', subtitle: 'Show your work' },
    { image: 'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Portfolio showcase', subtitle: 'Show your work' },
  ];

  const networkingHub = [
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
    { image: 'https://images.unsplash.com/photo-1558403194-611308249627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Content creator', subtitle: 'Collaborate with creators' },
  ];

  const similarCommunity = [
    { image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'UI Designer Semarang', subtitle: 'Connect with designers' },
    { image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Interaction design', subtitle: 'Design interactions' },
    { image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'UI/UX University', subtitle: 'Learn and grow' },
  ];

  const friendsOnline = [
    { image: 'https://images.unsplash.com/photo-1603415526960-fba5c0c642e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Lily Ackerman', subtitle: 'Online' },
    { image: 'https://images.unsplash.com/photo-1603415526960-fba5c0c642e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Mikasa Rasmi', subtitle: 'Online' },
    { image: 'https://images.unsplash.com/photo-1603415526960-fba5c0c642e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Anee Brown', subtitle: 'Online' },
    { image: 'https://images.unsplash.com/photo-1603415526960-fba5c0c642e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', title: 'Historia Wall', subtitle: 'Online' },
  ];

  return (
    <div style={styles.Card}>
      <div className="flex-1">
        <Section heading="My Community" items={communityChats} />
        <Section heading="Similar Community" items={similarCommunity} />
        <Section heading="Friends (354 Online)" items={friendsOnline} />
        <Section heading="Collaboration Chats" items={collaborationChats} />
        <Section heading="Networking Hub" items={networkingHub} />
      </div>
    </div>
  );
};

export default RightBar;
