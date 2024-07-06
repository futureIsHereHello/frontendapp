import React from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import {
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
  StarIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  // LifebuoyIcon, // Commenting out the problematic import
  UserIcon,
  SparklesIcon,
  BadgeCheckIcon,
  VideoCameraIcon,
  PencilIcon,
  BriefcaseIcon,
} from '@heroicons/react/solid';
import UserCard from './UserCard';

const styles = {
  Card: {
    position: 'relative',
    top: '72px',
    left: '0px',
    width: '20%',
    height: '90%',
    backgroundColor: '#ffffff',
    padding: '0px 16px',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
  Link: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    cursor: 'pointer',
    color: '#000000',
    textDecoration: 'none',
    width: '100%',
    justifyContent: 'flex-start',
    transition: 'background-color 0.3s ease',
  },
  LinkIcon: {
    marginRight: '8px',
    color: '#000000',
  },
  SectionTitle: {
    marginTop: '8px',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#000000',
  },
  LinkHover: {
    backgroundColor: '#FFA500',
    color: '#ffffff',
  },
};

const SidebarLink = ({ href, icon: Icon, label }) => {
  const router = useRouter();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <a href={href} className="sidebar-link" style={styles.Link} onClick={(e) => handleLinkClick(e, href)}>
      <Icon style={styles.LinkIcon} className="w-5 h-5" />
      {label}
    </a>
  );
};

const Sidebar = () => {
  return (
    <div style={styles.Card}>
      <UserCard />
      <div className="w-full mt-2">
        <SidebarLink href="/" icon={HomeIcon} label="Home" />
        <SidebarLink href="/inbox" icon={InboxIcon} label="Inbox" />
        <SidebarLink href="/jobs" icon={BriefcaseIcon} label="Jobs" />
        <SidebarLink href="/videos" icon={VideoCameraIcon} label="Video" />
        <SidebarLink href="/posts" icon={PencilIcon} label="Post" />
        <SidebarLink href="/connections" icon={UserGroupIcon} label="My Connections" />
        <SidebarLink href="/feed" icon={StarIcon} label="Feed" />
        <SidebarLink href="/projects" icon={ClipboardCheckIcon} label="My Projects" />
        <SidebarLink href="/events" icon={CalendarIcon} label="Events" />
        <SidebarLink href="/achievements" icon={BadgeCheckIcon} label="My Achievements" />
        <SidebarLink href="/collaborations" icon={UserIcon} label="Collaborations" />
      </div>
      <div style={{ ...styles.SectionTitle, textAlign: 'left' }}>My Contents</div>
      <div className="w-full">
        <SidebarLink href="/art" icon={SparklesIcon} label="Art Enthusiasts" />
        <SidebarLink href="/games" icon={SparklesIcon} label="Game Enthusiasts" />
        <SidebarLink href="/travel" icon={SparklesIcon} label="Travel Enthusiasts" />
        <SidebarLink href="/funny-cats" icon={SparklesIcon} label="Funny Cat Moments" />
      </div>
      <div className="mt-auto w-full">
        <SidebarLink href="/support" icon={SparklesIcon} label="Help & Support" />
        <SidebarLink href="/signout" icon={SparklesIcon} label="Sign Out" />
      </div>
    </div>
  );
};

export default Sidebar;
