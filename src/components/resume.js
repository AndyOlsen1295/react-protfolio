import React from 'react';
import resumePDF from './assets/resume.pdf';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>Click the button below to view my resume:</p>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer">View Resume</a>
    </div>
  );
}

export default Resume;
