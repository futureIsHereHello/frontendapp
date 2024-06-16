import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const styles = {
  Card: {
    width: '300px',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
  },
  Calendar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  Month: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 700,
    color: '#161616',
  },
  Days: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#7d8188',
  },
  Day: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '14px',
    color: '#161616',
    padding: '4px',
    borderRadius: '50%',
    transition: 'background-color 0.3s',
  },
  SelectedDay: {
    backgroundColor: '#0066ff',
    color: '#ffffff',
  },
  Schedule: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  Heading: {
    color: '#161616',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  ScheduleItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: '#f5f5f5',
    transition: 'background-color 0.3s',
  },
  ScheduleItemHover: {
    backgroundColor: '#e0e0e0',
  },
  ScheduleTime: {
    color: '#7d8188',
    fontSize: '12px',
  },
  ViewAllButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0066ff',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '12px',
    textDecoration: 'underline',
  },
  FullSchedule: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '20px',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    zIndex: 50,
    width: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
  },
  FullScheduleHeading: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '20px',
  },
  CloseButton: {
    color: '#0066ff',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'underline',
    alignSelf: 'flex-end',
  },
};

const Calendar = () => {
  return (
    <div style={styles.Calendar}>
      <div style={styles.Month}>
        <ChevronLeftIcon className="w-5 h-5 cursor-pointer" />
        <span>May 2022</span>
        <ChevronRightIcon className="w-5 h-5 cursor-pointer" />
      </div>
      <div style={styles.Days}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            style={{ ...styles.Day, ...(index === 0 ? styles.SelectedDay : {}) }}
          >
            <div>{index + 9}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Schedule = ({ schedules }) => {
  return (
    <div style={styles.Schedule}>
      <div style={styles.Heading}>Upcoming schedule</div>
      {schedules.map((schedule, index) => (
        <div
          key={index}
          style={styles.ScheduleItem}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
        >
          <div>
            <div>{schedule.event}</div>
            <div style={styles.ScheduleTime}>{schedule.time} • {schedule.location}</div>
          </div>
          <div>{schedule.date}</div>
        </div>
      ))}
    </div>
  );
};

const ScheduleCard = () => {
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const schedules = [
    { day: 'Tue', date: '10', event: 'Google job interview', time: '09.00 - 10.00', location: 'Zoom Meeting' },
    { day: 'Thu', date: '11', event: 'Meeting with client', time: '20.00 - End', location: 'Starbucks' },
    { day: 'Fri', date: '14', event: 'Landing page creation date', time: '09.00 - 10.00', location: 'Zoom Meeting' },
    // Add more schedule items if needed
  ];

  const handleViewAllClick = () => {
    setShowFullSchedule(true);
  };

  const handleCloseClick = () => {
    setShowFullSchedule(false);
  };

  return (
    <div style={styles.Card}>
      <Calendar />
      <Schedule schedules={schedules.slice(0, 3)} />
      <div style={styles.ViewAllButton} onClick={handleViewAllClick}>
        View all schedule
      </div>

      {showFullSchedule && (
        <div style={styles.FullSchedule}>
          <div style={styles.CloseButton} onClick={handleCloseClick}>
            Close
          </div>
          <div style={styles.FullScheduleHeading}>Full Schedule</div>
          <Schedule schedules={schedules} />
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
