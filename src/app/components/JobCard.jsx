import React, { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

const styles = {
  MainCard: {
    borderRadius: '20px',
    width: '324px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    height: '400px', // Set a fixed height for the main card
    overflow: 'hidden',
  },
  Card: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: '1', // Ensure the card content takes up available space
    overflow: 'hidden', // Hide overflow content
  }),
  Header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Date: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '4px 8px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#666',
  },
  BookmarkIcon: {
    width: '24px',
    height: '24px',
    backgroundImage: 'url(https://path/to/bookmark/icon.png)', // Replace with actual icon path
    backgroundSize: 'cover',
  },
  Company: {
    fontSize: '14px',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    gap: '8px',
    marginTop: '8px',
  },
  Title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    margin: '8px 0',
  },
  Tag: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '4px 8px',
    fontSize: '12px',
    color: '#000000',
    border: '1px solid #ccc',
  },
  Footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '0 0 18px 18px',
    padding: '8px 16px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  Salary: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000000',
  },
  Button: {
    cursor: 'pointer',
    borderRadius: '22px',
    backgroundColor: '#141413',
    color: '#ffffff',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
  },
  ModalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // right: '48%',
    bottom: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '95%', // Use a width that utilizes most of the viewport
    height: '95%', // Use a height that utilizes most of the viewport
    // maxHeight: '80vh',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  CloseButton: {
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#000',
    padding: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  ModalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    color:'#000',
    fontSize:'50px',
    fontStyle:'Bold'
  },
  ModalBody: {
    flex: '1',
    overflowY: 'auto',
    marginBottom: '20px',
    color:'#000'
  },
  ModalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  modalButton: {
    cursor: 'pointer',
    borderRadius: '22px',
    backgroundColor: '#fff',
    color: '#000',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',

  }
};

const JobCard = ({ job, backgroundColor }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={styles.MainCard}>
      <div style={styles.Card(backgroundColor)}>
        <div style={styles.Header}>
          <div style={styles.Date}>{job.date_posted}</div>
          <div style={styles.BookmarkIcon}></div>
        </div>
        <div style={styles.Company}>
          {job.company_name}
        </div>
        <div style={styles.Title}>
          {job.role}
          <div style={styles.Logo}></div>
        </div>
        <div style={styles.Tags}>
          {job.tags.map((tag, index) => (
            <div key={index} style={styles.Tag}>{tag}</div>
          ))}
        </div>
      </div>
      <div style={styles.Footer}>
        <div style={styles.Salary}>{job.pay_rate} {job.location}</div>
        <button style={styles.Button} onClick={openModal}>Details</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Job Details"
        style={{ overlay: { zIndex: 1000 } }}
      >
        <div style={styles.ModalContent}>
          <div style={styles.ModalHeader}>
            <h2>{job.role}</h2>
            <button style={styles.CloseButton} onClick={closeModal}>X</button>
          </div>
          <div style={styles.ModalBody}>
            <p><strong>Company:</strong> {job.company_name}</p>
            <p><strong>Date Posted:</strong> {job.date_posted}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Pay Rate:</strong> {job.pay_rate}</p>
            <p><strong>Tags:</strong> {job.tags.join(', ')}</p>
            <p><strong>Details:</strong> {job.details}</p>
          </div>
          <div style={styles.ModalFooter}>
            <button style={styles.modalButton} onClick={closeModal}>Apply Now</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobCard;
