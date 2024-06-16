import React from 'react';
import { BriefcaseIcon, UsersIcon, PencilIcon, BookOpenIcon, DesktopComputerIcon } from '@heroicons/react/outline';

const styles = {
  Card: {
    width: '264px',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
  },
  Section: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  Icon: {
    width: '24px',
    height: '24px',
    color: '#161616',
  },
  Title: {
    color: '#161616',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '18px',
  },
  Subtitle: {
    color: '#7d8188',
    fontSize: '10px',
    lineHeight: '16px',
  },
  Heading: {
    color: '#161616',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '21px',
  },
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#161616',
    backgroundColor: '#ffffff',
    outline: 'none',
  },
  IconButton: {
    color: '#161616',
    fill: '#161616',
    width: '24px',
    height: '24px',
  },
};

const Section = ({ icon: Icon, title, subtitle }) => (
  <div style={styles.Section}>
    <Icon style={styles.IconButton} />
    <div>
      <div style={styles.Title}>{title}</div>
      <div style={styles.Subtitle}>{subtitle}</div>
    </div>
  </div>
);

const OpportunitiesCard = () => {
  return (
    <div style={styles.Card}>
      <div style={styles.Heading}>Explore new opportunities</div>
      <Section icon={BriefcaseIcon} title="Creative gathering" subtitle="Connect with industry peers" />
      <Section icon={UsersIcon} title="Community decision" subtitle="Engage with the community" />
      <Section icon={PencilIcon} title="Artistic expression event" subtitle="Share your creativity" />
      <Section icon={BookOpenIcon} title="Interactive storytelling" subtitle="Engage with your audience" />
      <Section icon={DesktopComputerIcon} title="Virtual event experience" subtitle="Join the creative celebration" />
    </div>
  );
};

export default OpportunitiesCard;
