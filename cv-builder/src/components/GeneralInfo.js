import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="section">
      {" "}
      <h2>General Information</h2>{" "}
      {isEditing ? (
        <>
          {" "}
          <input
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
          />{" "}
          <input
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
          />{" "}
          <input
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone"
          />{" "}
          <button onClick={() => setIsEditing(false)}>Submit</button>{" "}
        </>
      ) : (
        <>
          {" "}
          <p>
            <strong>Name:</strong> {info.name}
          </p>{" "}
          <p>
            <strong>Email:</strong> {info.email}
          </p>{" "}
          <p>
            <strong>Phone:</strong> {info.phone}
          </p>{" "}
          <button onClick={() => setIsEditing(true)}>Edit</button>{" "}
        </>
      )}{" "}
    </div>
  );
}

export default GeneralInfo;