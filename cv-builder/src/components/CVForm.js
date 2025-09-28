import React from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVForm.css';

function CVForm() {
  return (
    <div className="cv-form">
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default CVForm;
