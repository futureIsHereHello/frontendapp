import React from 'react';

const styles = {
  Container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    marginBottom: '16px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderRadius: '12px',
    // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width:'80%',
    // right: '3%',
    top:'60px',
    zIndex: 1000,
    // marginBottom:'100px',
    height:'100px'
  },
  SearchInputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  SearchInput: {
    width: '300px',
    padding: '8px 16px',
    borderRadius: '24px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
  },
  LocationInput: {
    width: '200px',
    padding: '8px 16px',
    borderRadius: '24px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
  },
  SearchButton: {
    padding: '10px 20px',
    borderRadius: '24px',
    backgroundColor: '#000000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
  TagsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    // marginTop: '16px',
    marginLeft: '16px',
    marginRight: '16px',
    // marginTop: '72px'   // Ensures the tags are below the fixed container
    // position:'fixed'
  },
  Tag: {
    padding: '6px 12px',
    borderRadius: '24px',
    backgroundColor: '#000000',
    color: '#fff',
    fontSize: '12px',
    cursor: 'pointer',
  },
  ClearAll: {
    color: '#000000',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

const SearchBar = () => {
  return (
    <div>
      <div style={styles.Container}>
        <div style={styles.SearchInputContainer}>
          <input type="text" placeholder="Job title, keywords, or company" style={styles.SearchInput} />
          <input type="text" placeholder="All Locations" style={styles.LocationInput} />
          <div style={styles.TagsContainer}>
        <div style={styles.Tag}>Designer</div>
        <div style={styles.Tag}>Senior</div>
        <div style={styles.Tag}>Digital</div>
        <div style={styles.Tag}>UI Designer</div>
        <div style={styles.Tag}>Experience</div>
        <div style={styles.ClearAll}>Clear All</div>
      </div>
        </div>
        <button style={styles.SearchButton}>Find Jobs</button>
      </div>
    
    </div>
  );
};

export default SearchBar;
