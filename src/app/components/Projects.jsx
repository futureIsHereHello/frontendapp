import React from 'react';

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
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginRight: '16px',
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
  SectionHeading: {
    color: '#161616',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '18px',
    marginTop: '16px',
  },
};

const Section = ({ image, title, subtitle }) => (
  <div style={styles.Section}>
    <div style={{ ...styles.Icon, backgroundImage: `url(${image})` }}></div>
    <div>
      <div style={styles.Title}>{title}</div>
      <div style={styles.Subtitle}>{subtitle}</div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div style={styles.Card}>
      <div style={styles.Heading}>Projects</div>
      <div style={styles.SectionHeading}>Latest works</div>
      <Section image="https://via.placeholder.com/40" title="Alice Johnson" subtitle="Experienced creator" />
      <Section image="https://via.placeholder.com/40" title="Ethan Roberts" subtitle="Collaboration enthusiast" />
      <div style={styles.SectionHeading}>Creative ideas</div>
      <Section image="https://via.placeholder.com/40" title="Olivia Parker" subtitle="Innovative content maker" />
      <div style={styles.SectionHeading}>Skill showcase</div>
      <Section image="https://via.placeholder.com/40" title="Lucas Bennett" subtitle="Young talent rising" />
    </div>
  );
};

export default Projects;
