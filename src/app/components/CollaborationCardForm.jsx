import React, { useState } from 'react';

const styles = {
  Form: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    marginBottom: '20px', // Add space between form and grid
  },
  Input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'black', // Set text color to black
  },
  Button: {
    cursor: 'pointer',
    width: '100%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '0',
    borderRadius: '24px',
    boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
    backgroundColor: '#027bff',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 600,
    outline: 'none',
    marginTop: '16px',
  },
};

const CollaborationCardForm = ({ addCollaboration }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    amount: '',
    request: '',
    HighestBid: '',
    collaborate: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      description: formData.description,
      amount: parseFloat(formData.amount),
      request: formData.request,
      HighestBid: parseFloat(formData.HighestBid),
      collaborate: formData.collaborate === 'true', // Convert to boolean
    };

    try {
      const response = await fetch('http://localhost:5001/api/collaborate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newCollaboration = await response.json();
        addCollaboration(newCollaboration.collaborations[0]);
        // Clear the form inputs after successful submission
        setFormData({
          name: '',
          description: '',
          amount: '',
          request: '',
          HighestBid: '',
          collaborate: false,
        });
        console.log('Collaboration data submitted successfully');
      } else {
        console.error('Failed to submit collaboration data');
      }
    } catch (error) {
      console.error('Error submitting collaboration data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.Form}>
      <input
        style={styles.Input}
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        style={styles.Input}
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        style={styles.Input}
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        style={styles.Input}
        type="text"
        name="request"
        placeholder="Request"
        value={formData.request}
        onChange={handleChange}
      />
      <input
        style={styles.Input}
        type="number"
        name="HighestBid"
        placeholder="Highest Bid"
        value={formData.HighestBid}
        onChange={handleChange}
      />
      <label>
        Collaborate:
        <select
          name="collaborate"
          value={formData.collaborate}
          onChange={handleChange}
          style={styles.Input}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </label>
      <button type="submit" style={styles.Button}>Submit</button>
    </form>
  );
};

export default CollaborationCardForm;
