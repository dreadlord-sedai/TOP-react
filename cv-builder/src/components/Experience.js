import React, { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [exp, setExp] = useState({
    company: '', position: '', responsibilities: '', from: '', until: ''
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  return (
    <div className="section">
      <h2>Experience</h2>
      {isEditing ? (
        <>
          <input name="company" value={exp.company} onChange={handleChange} placeholder="Company Name" />
          <input name="position" value={exp.position} onChange={handleChange} placeholder="Position Title" />
          <textarea name="responsibilities" value={exp.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" />
          <input name="from" value={exp.from} onChange={handleChange} placeholder="From" />
          <input name="until" value={exp.until} onChange={handleChange} placeholder="Until" />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          <p><strong>From:</strong> {exp.from}</p>
          <p><strong>Until:</strong> {exp.until}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Experience;
