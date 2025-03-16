import { useState } from "react";
import "./customerDet.css";
import React from "react";
export default function CustomerDetailsForm() {
  const [formData, setFormData] = useState({
    newName: "",
    newEmail: "",
    newPhone: "",
    address: "",
    idType: "",
    idNumber: "",
    idExpiry: "",
    dob: "",
    oldName: "",
    oldDob: "",
    oldPin: "",
    oldPhone: "",
    promisedNotes: "",
    tvPlan: "",
    homePhonePlan: false,
    internetPlan: "",
    security: "",
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
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
        address: "",
        idType: "",
        idNumber: "",
        idExpiry: "",
        dob: "",
        oldName: "",
        oldDob: "",
        oldPin: "",
        oldPhone: "",
        promisedNotes: "",
        tvPlan: "",
        homePhonePlan: false,
        internetPlan: "",
        security: "",
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

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

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

        <label>Phone (Old Customer)</label>
        <input type="text" name="oldPhone" value={formData.oldPhone} onChange={handleChange} required />

        <label>Date of Birth (Old Customer)</label>
        <input type="date" name="oldDob" value={formData.oldDob} onChange={handleChange} required />

        <label>Account PIN</label>
        <input type="password" name="oldPin" value={formData.oldPin} onChange={handleChange} required />

        <label>Promised Notes</label>
        <textarea name="promisedNotes" value={formData.promisedNotes} onChange={handleChange} rows="4" />

        <label>TV Plan</label>
        <select name="tvPlan" value={formData.tvPlan} onChange={handleChange} required>
          <option value="">Select TV Plan</option>
          <option value="none">None</option>
          <option value="basic">Basic TV</option>
          <option value="3 theme">3 theme</option>
          <option value="4 theme and 1 premium">4 theme and 1 premium</option>
          <option value="7 theme and 1 premium">7 theme and 1 premium</option>
          <option value="11 theme and 2 premium">11 theme and 2 premium</option>
        </select>

        <label>Internet Plan</label>
        <select name="internetPlan" value={formData.internetPlan} onChange={handleChange} required>
          <option value="">Select Internet Plan</option>
          <option value="none">None</option>
          <option value="250 MBPS">250 MBPS</option>
          <option value="1 GIG">1 GIG</option>
          <option value="3 GIG">3 GIG</option>
        </select>

        <label>Security System</label>
        <select name="security" value={formData.security} onChange={handleChange} required>
          <option value="">Select Security Options</option>
          <option value="none">None</option>
          <option value="home-view">Home View</option>
          <option value="automation">Automation</option>
          <option value="secure">Secure</option>
          <option value="secure-plus-video">Secure Plus Video</option>
          <option value="secure-plus-control">Secure Plus Control</option>
          <option value="control-plus-video">Control Plus Video</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="homePhonePlan"
            checked={formData.homePhonePlan}
            onChange={handleChange}
          />
          Home Phone Plan
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}