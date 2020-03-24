import React from 'react';
import VideoUpload from '../../components/VideoUpload';
import Header from '../../components/Header';
import './styles.css';
import VideosList from '../../components/VideosList';

export default function Start() {
  return (
    <>
      <Header />

      <div className="Start">
        <VideoUpload />
        <VideosList />
      </div>
    </>
  );
}
