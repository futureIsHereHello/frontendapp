// src/app/collaborations/page.js

'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Collaboration from '../components/Collaboration';

const CollaborationPage = () => {


  
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col overflow-hidden w-full">
        <Header className="z-20" />
        <div className="flex flex-col overflow-y-auto p-4 mt-16 w-full">
          <Collaboration />
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;
