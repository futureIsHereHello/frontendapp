'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Jobs from '../components/Jobs';
import SearchBar from '../components/SearchBar';

const JobsPage = () => {
  const [searchCriteria, setSearchCriteria] = useState({ query: '', location: '', tags: [] });

  const handleSearch = (query, location, tags) => {
    setSearchCriteria({ query, location, tags });
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col overflow-hidden w-full">
        <Header className="z-20" />
        <div style={{ paddingTop: '120px' }} className="flex flex-col overflow-y-auto p-4 w-full">
          <SearchBar onSearch={handleSearch} />
          <Jobs searchCriteria={searchCriteria} />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
