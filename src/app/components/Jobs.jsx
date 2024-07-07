import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import JobModal from './JobModal';

const backgroundColors = [
  '#FFEBEE', '#E1F5FE', '#E8F5E9', '#FFFDE7', '#F3E5F5', '#EDE7F6', '#FFF3E0', '#E1F5FE', '#E1F5FE', '#E0F7FA',
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

const Jobs = ({ searchCriteria }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const params = {
          query: searchCriteria.query,
          location: searchCriteria.location,
          tags: searchCriteria.tags.join(','),
        };

        const response = await axios.get('http://localhost:5001/jobs/search', { params });
        setJobs(response.data);
      } catch (error) {
        console.log('There was an error fetching the jobs', error);
      }
    };

    fetchJobs();
  }, [searchCriteria]);

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
