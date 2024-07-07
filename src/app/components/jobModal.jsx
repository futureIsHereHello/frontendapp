import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  Overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  ModalContent: {
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
    color: '#fff',
    width: '100%',
  },
  CloseButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  ApplyButton: {
    backgroundColor: '#141413',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  JobDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

const JobModal = ({ jobId, onClose }) => {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5001/jobs/${jobId}`)
      .then(response => {
        setJob(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
        setIsLoading(false);
      });
  }, [jobId]);

  if (isLoading) {
    return <div style={styles.Overlay}>Loading...</div>;
  }

  if (!job) {
    return <div style={styles.Overlay}>Error loading job details. Please try again later.</div>;
  }

  return (
    <div style={styles.Overlay} onClick={onClose}>
      <div style={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.JobDetails}>
          <div style={styles.Header}>
            {/* <h2>{job.role}</h2> */}
            <span style={styles.CloseButton} onClick={onClose}>&times;</span>
          </div>
          <p><strong>Company:</strong> {job.company_name}</p>
          <p><strong>Date Posted:</strong> {job.data_posted}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Pay Rate:</strong> {job.pay_rate}</p>
          <p><strong>Tags:</strong> {job.tags.join(', ')}</p>
          <p><strong>Details:</strong> {job.details}</p>
          <button style={styles.ApplyButton}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
