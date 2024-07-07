// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';

// const styles = {
//   MainCard: {
//     borderRadius: '20px',
//     width: '324px',
//     boxSizing: 'border-box',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     flexDirection: 'column',
//     margin: '16px',
//     height: '400px', // Set a fixed height for the main card
//     overflow: 'hidden',
//   },
//   Card: (backgroundColor) => ({
//     backgroundColor: backgroundColor,
//     padding: '16px',
//     display: 'flex',
//     flexDirection: 'column',
//     flex: '1', // Ensure the card content takes up available space
//     overflow: 'hidden', // Hide overflow content
//   }),
//   Header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   Date: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     padding: '4px 8px',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     color: '#666',
//   },
//   BookmarkIcon: {
//     width: '24px',
//     height: '24px',
//     backgroundImage: 'url(https://path/to/bookmark/icon.png)', // Replace with actual icon path
//     backgroundSize: 'cover',
//   },
//   Company: {
//     fontSize: '14px',
//     color: '#000000',
//     display: 'flex',
//     alignItems: 'center',
//     fontWeight: 'bold',
//     gap: '8px',
//     marginTop: '8px',
//   },
//   Title: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: '#000000',
//     margin: '8px 0',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   Tags: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//     margin: '8px 0',
//   },
//   Tag: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     padding: '4px 8px',
//     fontSize: '12px',
//     color: '#000000',
//     border: '1px solid #ccc',
//   },
//   Footer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderRadius: '0 0 18px 18px',
//     padding: '8px 16px',
//     width: '100%',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
//   },
//   Salary: {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#000000',
//   },
//   Button: {
//     cursor: 'pointer',
//     borderRadius: '22px',
//     backgroundColor: '#141413',
//     color: '#ffffff',
//     padding: '8px 16px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     border: 'none',
//     outline: 'none',
//   },
//   ModalContent: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     width: '80%', // Use a width that utilizes most of the viewport
//     height: '80%', // Use a height that utilizes most of the viewport
//     overflowY: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     boxSizing: 'border-box',
//   },
//   CloseButton: {
//     cursor: 'pointer',
//     borderRadius: '50%',
//     backgroundColor: '#fff',
//     color: '#000',
//     padding: '8px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     border: 'none',
//     outline: 'none',
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//   },
//   ModalHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//     color: '#000',
//   },
//   ModalBody: {
//     flex: '1',
//     overflowY: 'auto',
//     marginBottom: '20px',
//     color: '#000',
//   },
//   ModalFooter: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginTop: '20px',
//   },
//   modalButton: {
//     cursor: 'pointer',
//     borderRadius: '22px',
//     backgroundColor: '#fff',
//     color: '#000',
//     padding: '8px 16px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     border: 'none',
//     outline: 'none',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
//   },
//   FormGroup: {
//     marginBottom: '20px',
//   },
//   FormLabel: {
//     marginBottom: '8px',
//     display: 'block',
//   },
//   FormInput: {
//     width: '100%',
//     padding: '8px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//   },
//   FormSelect: {
//     width: '100%',
//     padding: '8px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//     height: '100px', // Adjust height as needed
//     overflowY: 'scroll',
//   },
//   CurrentBids: {
//     marginTop: '20px',
//   },
//   BidList: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   BidItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   BidAmount: {
//     fontWeight: 'bold',
//   },
// };

// const JobCard = ({ job, backgroundColor }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [expectedAmount, setExpectedAmount] = useState('');
//   const [expectedDuration, setExpectedDuration] = useState('hour');
//   const [expectedCurrency, setExpectedCurrency] = useState('USD');
//   const [fitDescription, setFitDescription] = useState('');
//   const [bidAmount, setBidAmount] = useState('');
//   const [currentBids, setCurrentBids] = useState([]);
//   const [userBid, setUserBid] = useState(null);

//   const currencies = [
//     'USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NZD'
//   ];

//   const fetchCurrentBids = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5001/jobs/${job._id}/bids`);
//       setCurrentBids(response.data);
//       const userExistingBid = response.data.find(bid => bid.userId === 'currentUserId'); // Replace 'currentUserId' with actual user ID logic
//       setUserBid(userExistingBid);
//     } catch (error) {
//       console.log('Error fetching current bids:', error);
//     }
//   };

//   const openModal = () => {
//     fetchCurrentBids();
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleApply = async () => {
//     try {
//       const response = await axios.post(`http://localhost:5001/jobs/${job._id}/apply`, {
//         jobId: job._id,
//         expectedAmount,
//         expectedDuration,
//         expectedCurrency,
//         fitDescription,
//         bidAmount,
//         userId: 'currentUserId' // Replace with actual user ID logic
//       });
//       setUserBid(response.data);
//       fetchCurrentBids(); // Refresh bids after applying
//     } catch (error) {
//       console.log('Error submitting application:', error);
//     }
//   };

//   const handleUpdateBid = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5001/jobs/${userBid._id}/apply`, {
//         expectedAmount,
//         expectedDuration,
//         expectedCurrency,
//         fitDescription,
//         bidAmount,
//         userId: 'currentUserId' // Replace with actual user ID logic
//       });
//       setUserBid(response.data);
//       fetchCurrentBids(); // Refresh bids after updating
//     } catch (error) {
//       console.log('Error updating bid:', error);
//     }
//   };

//   const sortedBids = (duration) => {
//     return currentBids
//       .filter(bid => bid.expectedDuration === duration)
//       .sort((a, b) => b.bidAmount - a.bidAmount)
//       .slice(0, 5);
//   };

//   return (
//     <div style={styles.MainCard}>
//       <div style={styles.Card(backgroundColor)}>
//         <div style={styles.Header}>
//           <div style={styles.Date}>{job.date_posted}</div>
//           <div style={styles.BookmarkIcon}></div>
//         </div>
//         <div style={styles.Company}>
//           {job.company_name}
//         </div>
//         <div style={styles.Title}>
//           {job.role}
//           <div style={styles.Logo}></div>
//         </div>
//         <div style={styles.Tags}>
//           {job.tags.map((tag, index) => (
//             <div key={index} style={styles.Tag}>{tag}</div>
//           ))}
//         </div>
//       </div>
//       <div style={styles.Footer}>
//         <div style={styles.Salary}>{job.pay_rate} {job.location}</div>
//         <button style={styles.Button} onClick={openModal}>Details</button>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Job Details"
//         style={{ overlay: { zIndex: 1000 } }}
//       >
//         <div style={styles.ModalContent}>
//           <div style={styles.ModalHeader}>
//             <h2>{job.role}</h2>
//             <button style={styles.CloseButton} onClick={closeModal}>X</button>
//           </div>
//           <div style={styles.ModalBody}>
//             <p><strong>Company:</strong> {job.company_name}</p>
//             <p><strong>Date Posted:</strong> {job.date_posted}</p>
//             <p><strong>Location:</strong> {job.location}</p>
//             <p><strong>Pay Rate:</strong> {job.pay_rate}</p>
//             <p><strong>Tags:</strong> {job.tags.join(', ')}</p>
//             <p><strong>Details:</strong> {job.details}</p>
//             <div style={styles.FormGroup}>
//               <label style={styles.FormLabel} htmlFor="expectedAmount">Expected Amount</label>
//               <input
//                 type="number"
//                 id="expectedAmount"
//                 style={styles.FormInput}
//                 value={expectedAmount}
//                 onChange={(e) => setExpectedAmount(e.target.value)}
//               />
//             </div>
//             <div style={styles.FormGroup}>
//               <label style={styles.FormLabel} htmlFor="expectedDuration">Expected Duration</label>
//               <select
//                 id="expectedDuration"
//                 style={styles.FormInput}
//                 value={expectedDuration}
//                 onChange={(e) => setExpectedDuration(e.target.value)}
//               >
//                 <option value="hour">Hour</option>
//                 <option value="month">Month</option>
//                 <option value="year">Year</option>
//               </select>
//             </div>
//             <div style={styles.FormGroup}>
//               <label style={styles.FormLabel} htmlFor="expectedCurrency">Expected Currency</label>
//               <select
//                 id="expectedCurrency"
//                 style={styles.FormSelect}
//                 value={expectedCurrency}
//                 onChange={(e) => setExpectedCurrency(e.target.value)}
//                 size="5" // Make the select box scrollable
//               >
//                 {currencies.map((currency, index) => (
//                   <option key={index} value={currency}>{currency}</option>
//                 ))}
//               </select>
//             </div>
//             <div style={styles.FormGroup}>
//               <label style={styles.FormLabel} htmlFor="fitDescription">Why You'll Be a Good Fit</label>
//               <textarea
//                 id="fitDescription"
//                 style={styles.FormInput}
//                 value={fitDescription}
//                 onChange={(e) => setFitDescription(e.target.value)}
//               />
//             </div>
//             <div style={styles.FormGroup}>
//               <label style={styles.FormLabel} htmlFor="bidAmount">Bid Amount</label>
//               <input
//                 type="number"
//                 id="bidAmount"
//                 style={styles.FormInput}
//                 value={bidAmount}
//                 onChange={(e) => setBidAmount(e.target.value)}
//               />
//             </div>
//             <div style={styles.CurrentBids}>
//               <h3>Current Bids</h3>
//               {currentBids.length > 0 ? (
//                 <div>
//                   <h4>Hourly</h4>
//                   <ul style={styles.BidList}>
//                     {sortedBids('hour').map((bid, index) => (
//                       <li key={index} style={styles.BidItem}>
//                         <span style={styles.BidAmount}>{bid.bidAmount} {bid.expectedCurrency}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <h4>Monthly</h4>
//                   <ul style={styles.BidList}>
//                     {sortedBids('month').map((bid, index) => (
//                       <li key={index} style={styles.BidItem}>
//                         <span style={styles.BidAmount}>{bid.bidAmount} {bid.expectedCurrency}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <h4>Yearly</h4>
//                   <ul style={styles.BidList}>
//                     {sortedBids('year').map((bid, index) => (
//                       <li key={index} style={styles.BidItem}>
//                         <span style={styles.BidAmount}>{bid.bidAmount} {bid.expectedCurrency}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <p>No current bids</p>
//               )}
//             </div>
//           </div>
//           <div style={styles.ModalFooter}>
//             {userBid ? (
//               <button style={styles.modalButton} onClick={handleUpdateBid}>Update Bid</button>
//             ) : (
//               <button style={styles.modalButton} onClick={handleApply}>Apply Now</button>
//             )}
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default JobCard;
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Cookies from 'js-cookie';

// Modal.setAppElement('#__next'); // Set the app element to the root element

const styles = {
  MainCard: {
    borderRadius: '20px',
    width: '324px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    height: '300px', // Set a fixed height for the main card
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
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '80%', // Use a width that utilizes most of the viewport
    height: '80%', // Use a height that utilizes most of the viewport
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
    color: '#000',
  },
  ModalBody: {
    flex: '1',
    overflowY: 'auto',
    marginBottom: '20px',
    color: '#000',
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
  },
  FormGroup: {
    marginBottom: '20px',
  },
  FormLabel: {
    marginBottom: '8px',
    display: 'block',
  },
  FormInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  FormSelect: {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    height: '100px', // Adjust height as needed
    overflowY: 'scroll',
  },
  CurrentBids: {
    marginTop: '20px',
  },
  BidList: {
    listStyleType: 'none',
    padding: 0,
  },
  BidItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  BidAmount: {
    fontWeight: 'bold',
  },
};

const JobCard = ({ job, backgroundColor }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [expectedAmount, setExpectedAmount] = useState('');
  const [expectedDuration, setExpectedDuration] = useState('hour');
  const [expectedCurrency, setExpectedCurrency] = useState('USD');
  const [fitDescription, setFitDescription] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [currentBids, setCurrentBids] = useState([]);
  const [userBid, setUserBid] = useState(null);

  const currencies = [
    'USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NZD'
  ];

  const fetchCurrentBids = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/jobs/${job._id}/bids`);
      setCurrentBids(response.data);
      //if you want to use localstorage instead of cookies use localstorage.getitem('useId)
      const userExistingBid = response.data.find(bid => bid.userId === Cookies.get('userId'));
      setUserBid(userExistingBid);
    } catch (error) {
      console.log('Error fetching current bids:', error);
    }
  };

  const openModal = () => {
    fetchCurrentBids();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleApply = async () => {
    try {
      //if you want to use localstorage instead of cookies use localstorage.getitem('token')
      const token = Cookies.get('token');
      const response = await axios.post(`http://localhost:5001/jobs/${job._id}/apply`, {
        jobId: job._id,
        expectedAmount,
        expectedDuration,
        expectedCurrency,
        fitDescription,
        bidAmount,
        userId: Cookies.get('userId')  //if you want to use localstorage instead of cookies use localstorage.getitem('useId')

      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserBid(response.data);
      fetchCurrentBids(); // Refresh bids after applying
    } catch (error) {
      console.log('Error submitting application:', error);
    }
  };

  const handleUpdateBid = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.put(`http://localhost:5001/bids/${userBid._id}`, {
        expectedAmount,
        expectedDuration,
        expectedCurrency,
        fitDescription,
        bidAmount,
        userId: Cookies.get('userId') // Pass the userId from localStorage
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserBid(response.data);
      fetchCurrentBids(); // Refresh bids after updating
    } catch (error) {
      console.log('Error updating bid:', error);
    }
  };

  const sortedBids = (duration) => {
    return currentBids
      .filter(bid => bid.expectedDuration === duration)
      .sort((a, b) => b.bidAmount - a.bidAmount)
      .slice(0, 5);
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
            <div style={styles.FormGroup}>
              <label style={styles.FormLabel} htmlFor="expectedAmount">Expected Amount</label>
              <input
                type="number"
                id="expectedAmount"
                style={styles.FormInput}
                value={expectedAmount}
                onChange={(e) => setExpectedAmount(e.target.value)}
              />
            </div>
            <div style={styles.FormGroup}>
              <label style={styles.FormLabel} htmlFor="expectedDuration">Expected Duration</label>
              <select
                id="expectedDuration"
                style={styles.FormInput}
                value={expectedDuration}
                onChange={(e) => setExpectedDuration(e.target.value)}
              >
                <option value="hour">Hour</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div style={styles.FormGroup}>
              <label style={styles.FormLabel} htmlFor="expectedCurrency">Expected Currency</label>
              <select
                id="expectedCurrency"
                style={styles.FormSelect}
                value={expectedCurrency}
                onChange={(e) => setExpectedCurrency(e.target.value)}
                size="5" // Make the select box scrollable
              >
                {currencies.map((currency, index) => (
                  <option key={index} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
            <div style={styles.FormGroup}>
              <label style={styles.FormLabel} htmlFor="fitDescription">Why You'll Be a Good Fit</label>
              <textarea
                id="fitDescription"
                style={styles.FormInput}
                value={fitDescription}
                onChange={(e) => setFitDescription(e.target.value)}
              />
            </div>
            <div style={styles.FormGroup}>
              <label style={styles.FormLabel} htmlFor="bidAmount">Bid Amount</label>
              <input
                type="number"
                id="bidAmount"
                style={styles.FormInput}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
            </div>
            <div style={styles.CurrentBids}>
              <h3>Current Bids</h3>
              {currentBids.length > 0 ? (
                <div>
                  <h4>Hourly</h4>
                  <ul style={styles.BidList}>
                    {sortedBids('hour').map((bid, index) => (
                      <li key={index} style={styles.BidItem}>
                        <span style={styles.BidAmount}>{bid.bidAmount} {bid.expectedCurrency}</span>
                      </li>
                    ))}
                  </ul>
                  <h4>Monthly</h4>
                  <ul style={styles.BidList}>
                    {sortedBids('month').map((bid, index) => (
                      <li key={index} style={styles.BidItem}>
                        <span style={styles.BidAmount}>{bid.bidAmount} {bid.expectedCurrency}</span>
                      </li>
                    ))}
                  </ul>
                  <h4>Yearly</h4>
                  <ul style={styles.BidList}>
                    {sortedBids('year').map((bid, index) => (
                      <li key={index} style={styles.BidItem}>
                        <span style={styles.BidAmount}>{bid.bidAmount} {bid.expectedCurrency}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No current bids</p>
              )}
            </div>
          </div>
          <div style={styles.ModalFooter}>
            {userBid ? (
              <button style={styles.modalButton} onClick={handleUpdateBid}>Update Bid</button>
            ) : (
              <button style={styles.modalButton} onClick={handleApply}>Apply Now</button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobCard;
