// components/Jobs.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import JobModal from './JobModal';

const backgroundColors = [
  '#FFEBEE', '#E1F5FE', '#E8F5E9', '#FFFDE7', '#F3E5F5', '#EDE7F6', '#FFF3E0', '#E1F5FE', '#E1F5FE', '#E0F7FA',
  // Add more colors if needed
];

const styles = {
  Grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    marginTop: '40px',
  },
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the jobs', error);
      });
  }, []);

  return (
    <div style={styles.Grid}>
      {jobs.map((job, index) => (
        <JobCard
          key={job._id}
          job={job}
          backgroundColor={backgroundColors[index % backgroundColors.length]}
          onClick={() => setSelectedJob(job)}
        />
      ))}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Jobs;
