'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Jobs from '../components/Jobs';
import SearchBar from '../components/SearchBar';

const JobsPage = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col overflow-hidden w-full">
        <Header className="z-20" />
        <div style={{ paddingTop: '120px' }} className="flex flex-col overflow-y-auto p-4 w-full">
        {/* <div style={{background:'#fffff', width:'100%'}}> hello</div> */}
          <SearchBar />
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
