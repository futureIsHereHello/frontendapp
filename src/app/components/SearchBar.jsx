import React, { useState, useEffect } from 'react';

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
    position: 'fixed',
    width: '80%',
    top: '60px',
    zIndex: 1000,
    height: '100px',
  },
  SearchInputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#000',
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
    color: '#000',
  },
  TagDropdown: {
    width: '200px', // Make the dropdown same size as LocationInput
    padding: '8px 16px',
    borderRadius: '24px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#aaa', // Make the placeholder text gray
  },
  TagsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginLeft: '16px',
    marginRight: '16px',
    flexGrow: 1,
  },
  Tag: {
    padding: '6px 12px',
    borderRadius: '24px',
    backgroundColor: '#000000',
    color: '#fff',
    fontSize: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  RemoveTag: {
    marginLeft: '8px',
    cursor: 'pointer',
  },
  ButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  ClearAll: {
    color: '#000000',
    cursor: 'pointer',
    fontSize: '12px',
    padding: '10px 20px',
    borderRadius: '24px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginLeft: '8px', // Add space between Clear All and Find Jobs button
  },
  SearchButton: {
    padding: '10px 20px',
    borderRadius: '24px',
    backgroundColor: '#000000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

const placeholderTags = ['Designer', 'Distant', 'Senior level', 'Senior', 'Digital', 'UI Designer', 'Experience', 'Data Scientist', 'Frontend', 'Backend', 'Fullstack', 'Manager'];

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchInput, locationInput, selectedTags);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInput, locationInput, selectedTags]);

  const handleTagSelect = (e) => {
    const tag = e.target.value;
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setTagInput('');
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const handleSearchClick = () => {
    onSearch(searchInput, locationInput, selectedTags);
  };

  return (
    <div>
      <div style={styles.Container}>
        <div style={styles.SearchInputContainer}>
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            style={styles.SearchInput}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="All Locations"
            style={styles.LocationInput}
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />
          <select
            value={tagInput}
            onChange={handleTagSelect}
            style={styles.TagDropdown}
          >
            <option value="" disabled>Tags</option>
            {placeholderTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div style={styles.TagsContainer}>
          {selectedTags.map((tag) => (
            <div key={tag} style={styles.Tag}>
              {tag}
              <span style={styles.RemoveTag} onClick={() => handleRemoveTag(tag)}>x</span>
            </div>
          ))}
        </div>
        <div style={styles.ButtonContainer}>
          <div style={styles.ClearAll} onClick={clearAllTags}>
            Clear All
          </div>
          <button style={styles.SearchButton} onClick={handleSearchClick}>
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
