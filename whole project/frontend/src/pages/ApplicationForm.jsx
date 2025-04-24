import React, { useState } from 'react';

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    width: '600px',  // Increased width
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '16px', // Increased font size for readability
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',  // Increased space between form and buttons
  },
  button: {
    padding: '12px 24px',  // Larger buttons
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px', // Larger font size on buttons
  },
  input: {
    padding: '12px',  // Larger input fields
    margin: '10px 0',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
};

const ApplicationForm = ({ company, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    aadhaar: '',
    medicalCertificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>Apply for {company.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label>
            Aadhaar Number:
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label>
            Medical Certificate:
            <input
              type="file"
              name="medicalCertificate"
              onChange={handleFileChange}
              required
              style={styles.input}
            />
          </label>
          <div style={styles.modalActions}>
            <button type="submit" style={styles.button}>Submit</button>
            <button type="button" onClick={onClose} style={styles.button}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
