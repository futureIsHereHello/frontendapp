import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import axios from 'axios';

const jobsData = [
  {
    id: 1,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 4,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 5,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 6,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 7,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 8,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 9,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  {
    id: 10,
    title: 'Senior UI/UX Designer',
    company: 'Amazon',
    date: '20 May, 2023',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
  },
  // Add more job data as needed
];

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
    marginTop:'40px'
  },
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/jobs')
    .then(response => {
      setJobs(response.data)
    })
    .catch(error => {
      console.log('There was an error fetching the jobs', error)
    })
  }, [])




  return (
    <div style={styles.Grid}>
      {jobs.map((job, index) => (
        <JobCard key={job._id} job={job} backgroundColor={backgroundColors[index % backgroundColors.length]} />
      ))}
    </div>
  );
};

export default Jobs;
