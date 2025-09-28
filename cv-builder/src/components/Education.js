import React, { useState } from 'react';
import '../styles/Education.css';

function Education() {
  const [edu, setEdu] = useState({ school: '', title: '', date: '' });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  return (
    <div className="section">
      <h2>Education</h2>
      {isEditing ? (
        <>
          <input name="school" value={edu.school} onChange={handleChange} placeholder="School Name" />
          <input name="title" value={edu.title} onChange={handleChange} placeholder="Title of Study" />
          <input name="date" value={edu.date} onChange={handleChange} placeholder="Date of Study" />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Title:</strong> {edu.title}</p>
          <p><strong>Date:</strong> {edu.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Education;
