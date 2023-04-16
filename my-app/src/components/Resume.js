import React from 'react';

function Resume({ resumePDF }) {
  return (
    <div>
      <h2>Resume</h2>
      <p>Click the button below to view my resume:</p>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer">View Resume</a>
    </div>
  );
}

export default Resume;


