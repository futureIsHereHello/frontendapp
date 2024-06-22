import React from 'react';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  UserCircleIcon,
  InboxIcon,
  UserGroupIcon,
  StarIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  SupportIcon,
  UsersIcon,
  SparklesIcon,
  BadgeCheckIcon,
  VideoCameraIcon,
  PencilIcon,
} from '@heroicons/react/outline';
import UserCard from './UserCard';

const styles = {
  Card: {
    position: 'relative',
    top: '72px', // Adjust to match header height
    left: '0px',
    width: '20%',
    height: '90%',
    backgroundColor: '#ffffff', // Set background color to white
    padding: '0px 16px',
    zIndex: 20, // Ensure the sidebar is above other content
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none', // IE and Edge
    'scrollbar-width': 'none', // Firefox
  },
  Link: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    cursor: 'pointer',
    color: '#000000', // Set text color to black
    textDecoration: 'none',
    width: '100%', // Ensure the links take the full width
    justifyContent: 'flex-start', // Align the links to the start
    transition: 'background-color 0.3s ease', // Add transition for hover effect
  },
  LinkIcon: {
    marginRight: '8px',
    color: '#000000', // Set icon color to black
  },
  SectionTitle: {
    marginTop: '8px', // Reduced marginTop
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#000000', // Set section title color to black
  },
  LinkHover: {
    backgroundColor: '#FFA500', // Set hover background color to orange
    color: '#ffffff', // Set hover text color to white
  },
};

const SidebarLink = ({ href, icon: Icon, label, onClick }) => (
  <a href={href} className="sidebar-link" style={styles.Link} onClick={onClick}>
    <Icon style={styles.LinkIcon} className="w-5 h-5" />
    {label}
  </a>
);

const Sidebar = () => {
  const router = useRouter();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <div style={styles.Card}>
      <UserCard />
      <div className="w-full mt-2">
        <SidebarLink href="/" icon={HomeIcon} label="Home" onClick={(e) => handleLinkClick(e, '/')} />
        {/* <SidebarLink href="/user/profile" icon={UserCircleIcon} label="My Profile" /> */}
        <SidebarLink href="/inbox" icon={InboxIcon} label="Inbox" onClick={(e) => handleLinkClick(e, '/inbox')} />
        <SidebarLink href="/videos" icon={VideoCameraIcon} label="Video" onClick={(e) => handleLinkClick(e, '/videos')} />
        <SidebarLink href="/posts" icon={PencilIcon} label="Post" onClick={(e) => handleLinkClick(e, '/posts')} />
        <SidebarLink href="/connections" icon={UserGroupIcon} label="My Connections" onClick={(e) => handleLinkClick(e, '/connections')} />
        <SidebarLink href="/feed" icon={StarIcon} label="Feed" onClick={(e) => handleLinkClick(e, '/feed')} />
        <SidebarLink href="/projects" icon={ClipboardCheckIcon} label="My Projects" onClick={(e) => handleLinkClick(e, '/projects')} />
        <SidebarLink href="/events" icon={CalendarIcon} label="Events" onClick={(e) => handleLinkClick(e, '/events')} />
        <SidebarLink href="/achievements" icon={BadgeCheckIcon} label="My Achievements" onClick={(e) => handleLinkClick(e, '/achievements')} />
        <SidebarLink href="/collaborations" icon={UsersIcon} label="Collaborations" onClick={(e) => handleLinkClick(e, '/collaborations')} />
        </div>
      <div style={{ ...styles.SectionTitle, textAlign: 'left' }}>My Contents</div>
      <div className="w-full">
        <SidebarLink href="/art" icon={SparklesIcon} label="Art Enthusiasts" onClick={(e) => handleLinkClick(e, '/art')} />
        <SidebarLink href="/games" icon={SparklesIcon} label="Game Enthusiasts" onClick={(e) => handleLinkClick(e, '/games')} />
        <SidebarLink href="/travel" icon={SparklesIcon} label="Travel Enthusiasts" onClick={(e) => handleLinkClick(e, '/travel')} />
        <SidebarLink href="/funny-cats" icon={SparklesIcon} label="Funny Cat Moments" onClick={(e) => handleLinkClick(e, '/funny-cats')} />
      </div>
      <div className="mt-auto w-full">
        <SidebarLink href="/support" icon={SupportIcon} label="Help & Support" onClick={(e) => handleLinkClick(e, '/support')} />
        <SidebarLink href="/signout" icon={SupportIcon} label="Sign Out" onClick={(e) => handleLinkClick(e, '/signout')} />
      </div>
    </div>
  );
};

export default Sidebar;
