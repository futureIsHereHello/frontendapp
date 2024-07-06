// src/app/user/profile/page.js
'use client';

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Line } from 'react-chartjs-2';
import ChannelAnalyticsCard from '../../components/ChannelAnalyticsCard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import AnalyticsCard from '@/app/components/AnalyticsCard';
import StatsBar from '@/app/components/StatsBar';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const styles = {
  Page: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#ffffff',
  },
  Content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: '20px',
  },
  ProfileHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #ddd',
    marginBottom: '20px',
  },
  ProfileName: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  ProfileDescription: {
    fontSize: '16px',
    color: '#666',
  },
  Dropdown: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '20px',
  },
  DropdownButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '200px',
  },
  DropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    borderRadius: '10px',
    overflowY: 'auto',
    maxHeight: '200px',
    width: '40%',
  },
  Show: {
    display: 'block',
  },
  DropdownItem: {
    color: '#000',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
  },
  SocialIcon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  MainCard: {
    backgroundColor: '#ffffff',
    borderRadius: '17px',
    width: '100%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    marginBottom: '20px',
  },
  Overview: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#323232',
  },
  SubCard: {
    flex: '1 1 calc(50% - 40px)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '30%',
    margin: '10px',
  },
  SubCardText: {
    color: '#1d1d1d',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '33px',
  },
  SubCardImage: {
    width: '19px',
    height: '22px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginBottom: '10px',
  },
  SubCardDesc: {
    color: '#323232',
    fontSize: '10px',
    lineHeight: '15px',
  },
  MetricGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  Row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  Column: {
    flex: '1',
  },
  FollowerGrowthCard: {
    backgroundColor: '#ffffff',
    borderRadius: '17px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '50%',
    height:'100%',
    marginBottom: '20px',
  },
  StatsBarCard: {
    backgroundColor: '#ffffff',
    borderRadius: '17px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '50%',
    marginBottom: '20px',
    overflowY: 'auto',
    marginLeft: '20px',
    maxHeight: '500px',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none',  /* Internet Explorer 10+ */
  },
  ChannelAnalyticCard: {
    width: '30%',
    borderRadius: '17px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    height: '387px',
    backgroundColor: '#ffffff',
    borderRadius: '17px',
    padding: '20px',
    marginLeft: '20px',
  },
  AnalyticsCardContainer: {
    width: '30%',
    height: '95%',
    borderRadius: '25px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    marginLeft: '20px',
  },
  StatsBarContainer: {
    width: '100%',
    gap: '20px',
    padding: '20px',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none',  /* Internet Explorer 10+ */
  },
  StatsBarTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#000000', // Change to black
  },
  RightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginLeft: '20px',
    width: '30%',
    height: '100%',
  },
  ActivitySection: {
    backgroundColor: '#ffffff',
    borderRadius: '17px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    height: '450px', // Adjust this value as needed
    overflowY: 'auto',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none',  /* Internet Explorer 10+ */
  },
  ActivityCard: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  ActivityCardImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  ActivityCardContent: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
  },
  ActivityCardName: {
    fontWeight: 'bold',
    color: '#000000', // Change to black
    fontSize: '14px',
    marginBottom: '5px',
  },
  ActivityCardAction: {
    fontSize: '12px',
    color: '#000000', // Change to black
    marginBottom: '10px',
  },
  ActivityCardComment: {
    fontSize: '12px',
    color: '#000000', // Change to black
    marginBottom: '10px',
  },
  ActivityCardTime: {
    fontSize: '12px',
    color: '#000000', // Change to black
  },
  HideScrollbarWebkit: {
    '&::-webkit-scrollbar': {
      display: 'none', /* Safari and Chrome */
    },
  },
};

const ProfilePage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const socialPlatforms = [
    { name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
    { name: 'YouTube', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png' },
    { name: 'Twitter', icon: 'https://upload.wikimedia/en/6/60/Twitter_Logo_as_of_2021.svg' },
    { name: 'LinkedIn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' },
    { name: 'Facebook', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemClick = (platform) => {
    setSelectedPlatform(platform);
    setDropdownVisible(false);
  };

  const subCards = [
    { title: 'Subscribers', value: '268,244', description: '121.2k more than usual', icon: 'https://assets.api.uizard.io/api/cdn/stream/79272d38-4e19-42ba-b562-f51ca4f5c27f.png', backgroundColor: '#fde2e2' },
    { title: 'Estimated Revenue', value: '$3,221', description: '$455 more than usual', icon: 'https://assets.api.uizard.io/api/cdn/stream/79272d38-4e19-42ba-b562-f51ca4f5c27f.png', backgroundColor: '#e2f4fd' },
    { title: 'Views', value: '8.2M', description: '2.1M more than usual', icon: 'https://assets.api.uizard.io/api/cdn/stream/79272d38-4e19-42ba-b562-f51ca4f5c27f.png', backgroundColor: '#e7e2fd' },
    { title: 'Watch Time (hrs)', value: '8,221', description: 'About the same as usual', icon: 'https://assets.api.uizard.io/api/cdn/stream/79272d38-4e19-42ba-b562-f51ca4f5c27f.png', backgroundColor: '#e2fde9' },
  ];

  const activities = [
    {
      userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      userName: 'Fachry Nurdiansyah',
      action: 'commented your photo',
      comment: 'Great work deserves appreciations. This is so amazing!',
      timeAgo: '1h ago',
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      userName: 'Emmanuel Ikechukwu',
      action: 'commented your photo',
      comment: 'I’ve tried that when I first noticed it, but I’ll try again. Thank you!',
      timeAgo: '2h ago',
    },
    {
      
      userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      userName: 'Goutham Tronics',
      action: 'commented your photo',
      comment: 'There is something to smash your head over!',
      timeAgo: '3h ago',
    },
    {
      
      userImage: 'https://randomuser.me/api/portraits/men/4.jpg',
      userName: 'John Doe',
      action: 'commented your photo',
      comment: 'Fantastic work!',
      timeAgo: '4h ago',
    },
  ];

  const followerGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Follower Growth',
        data: [50000, 75000, 100000, 125000, 150000, 200000, 250000],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const followerGrowthOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  const statsBars = [
    {
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      title: 'What is the value for your company',
      subtitle: 'Post number 2',
      category: 'Company',
      statValue: '7k',
      statChange: '4%',
      increase: false,
      backgroundColor: '#fde2e2',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      title: 'How to sell stuff?',
      subtitle: 'Post number 1',
      category: 'Blog',
      statValue: '3k',
      statChange: '5%',
      increase: true,
      backgroundColor: '#e2f4fd',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      title: 'New Product',
      subtitle: 'Post number 3',
      category: 'Product',
      statValue: '2k',
      statChange: '6%',
      increase: true,
      backgroundColor: '#e7e2fd',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      title: 'What do you do today?',
      subtitle: 'Post number 4',
      category: 'Persona',
      statValue: '1k',
      statChange: '8%',
      increase: true,
      backgroundColor: '#e2fde9',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      title: 'Another Post',
      subtitle: 'Post number 5',
      category: 'Persona',
      statValue: '1k',
      statChange: '8%',
      increase: true,
      backgroundColor: '#f5e2fd',
    },
  ];
  
  

  return (
    <div style={styles.Page}>
      <Sidebar />
      <div style={styles.Content}>
        <Header />
        <div style={styles.ProfileHeader}>
          <div style={styles.ProfileName}>John Doe</div>
          <div style={styles.ProfileDescription}>Content Creator</div>
        </div>
        <div style={styles.Dropdown}>
          <div style={styles.DropdownButton} onClick={toggleDropdown}>
            {selectedPlatform ? (
              <>
                <img src={selectedPlatform.icon} alt={`${selectedPlatform.name} icon`} style={styles.SocialIcon} />
                {selectedPlatform.name}
              </>
            ) : (
              'Select Social Media'
            )}
            <span style={{ marginLeft: '10px' }}>▼</span>
          </div>
          <div style={{ ...styles.DropdownContent, ...(dropdownVisible ? styles.Show : {}) }}>
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                style={styles.DropdownItem}
                onClick={() => handleItemClick(platform)}
              >
                <img src={platform.icon} alt={`${platform.name} icon`} style={styles.SocialIcon} />
                {platform.name}
              </div>
            ))}
          </div>
        </div>
        <div style={styles.Row}>
          <div style={styles.Column}>
            <div style={styles.MainCard}>
              <div style={styles.Overview}>Overview</div>
              <div style={styles.MetricGrid}>
                {subCards.map((card, index) => (
                  <div key={index} style={{ ...styles.SubCard, backgroundColor: card.backgroundColor }}>
                    <div style={styles.SubCardText}>{card.value}</div>
                    <div style={{
                      ...styles.SubCardImage,
                      backgroundImage: `url(${card.icon})`,
                    }} />
                    <div style={styles.SubCardDesc}>{card.title}</div>
                    <div style={styles.SubCardDesc}>{card.description}</div>
                  </div>
                ))}
              </div>
            </div> 
          </div>
          
          <div style={styles.AnalyticsCardContainer}>
            <AnalyticsCard />
          </div>
          
          <div style={styles.RightColumn}>
            
            <div style={styles.ActivitySection}>
            <div style={styles.StatsBarTitle}>Post Activity</div>
              {activities.slice(0, 3).map((activity, index) => (
                <div key={index} style={styles.ActivityCard}>
                  <img src={activity.userImage} alt={`${activity.userName} avatar`} style={styles.ActivityCardImage} />
                  <div style={styles.ActivityCardContent}>
                    <div style={styles.ActivityCardName}>{activity.userName}</div>
                    <div style={styles.ActivityCardAction}>{activity.action}</div>
                    <div style={styles.ActivityCardComment}>{activity.comment}</div>
                    <div style={styles.ActivityCardTime}>{activity.timeAgo}</div>
                  </div>
                </div>
              ))}
              {activities.length > 3 && (
                <div style={{ ...styles.ActivitySection, ...styles.HideScrollbarWebkit, maxHeight: '200px' }}>
                  {activities.slice(3).map((activity, index) => (
                    <div key={index} style={styles.ActivityCard}>
                      <img src={activity.userImage} alt={`${activity.userName} avatar`} style={styles.ActivityCardImage} />
                      <div style={styles.ActivityCardContent}>
                        <div style={styles.ActivityCardName}>{activity.userName}</div>
                        <div style={styles.ActivityCardAction}>{activity.action}</div>
                        <div style={styles.ActivityCardComment}>{activity.comment}</div>
                        <div style={styles.ActivityCardTime}>{activity.timeAgo}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex" styles = {styles.Row}>
              <div style={styles.FollowerGrowthCard}>
                <div style={styles.Overview}>Follower Growth</div>
                <Line data={followerGrowthData} options={followerGrowthOptions} />
              </div>
              
              <div style={{ ...styles.StatsBarCard, ...styles.HideScrollbar }}>
              <div style={{ ...styles.StatsBarContainer, ...styles.HideScrollbarWebkit }}>
                <div style={styles.StatsBarTitle}>Recent Activity</div>
                {statsBars.map((stat, index) => (
                  <StatsBar
                    key={index}
                    image={stat.image}
                    title={stat.title}
                    subtitle={stat.subtitle}
                    category={stat.category}
                    statValue={stat.statValue}
                    statChange={stat.statChange}
                    increase={stat.increase}
                    backgroundColor={stat.backgroundColor}
                  />
                ))}
              </div>
              </div>
              
            </div>  
        
      </div>
    </div>
  );
};

export default ProfilePage;
