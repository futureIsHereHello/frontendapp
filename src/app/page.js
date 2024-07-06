// src/app/page.js

'use client';

import React, { useState } from 'react';
import Sidebar from '../app/components/Sidebar';
// import { useRouter } from 'next/router';

import Header from '../app/components/Header';
import Card from '../app/components/aicard';
import Feed from "./components/Feed";
import OpportunitiesCard from '../app/components/OpportunitiesCard';
import Projects from './components/Projects';
import RightBar from './components/Rightbar';
import Stories from './components/Stories';
import ScheduleCard from './components/ScheduleCard';
import TaskBoard from './components/TaskBoard';
import Collaborations from './components/Collaboration'; // New Task Board component

export default function Home() {
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [isTaskBoardVisible, setIsTaskBoardVisible] = useState(false);
  const [isCollaborationVisible, setIsCollaborationVisible] = useState(false);

  const handleCalendarClick = () => {
    setIsScheduleVisible(!isScheduleVisible);
  };

  const handleTaskClick = () => {
    setIsTaskBoardVisible(!isTaskBoardVisible);
  };

  const handleCollaborationClick = () => {
    setIsCollaborationVisible(!isCollaborationVisible);
  };

  const handleLiveStreamClick = () => {
    // Handle live stream click
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col overflow-hidden w-full">
        <Header
          onCalendarClick={handleCalendarClick}
          onTaskClick={handleTaskClick}
          onCollaborationClick={handleCollaborationClick}
          onLiveStreamClick={handleLiveStreamClick}
          className="z-20"
        />
        <div className="flex p-4 space-x-4 mt-16 ml-2 w-full overflow-y-auto">
          <div className="flex flex-col space-y-6 w-1/2">
            <Stories />
            <Card />
            <Feed />
          </div>
          <div className="w-auto flex-1 flex-col space-y-6">
            <OpportunitiesCard />
            <Projects />
          </div>
        </div>
        {isScheduleVisible && <ScheduleCard />}
        {isTaskBoardVisible && <TaskBoard />}
        {isCollaborationVisible && <Collaborations/>}
      </div>
      <RightBar />
    </div>
  );
}
