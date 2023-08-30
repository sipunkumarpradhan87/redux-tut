import React, { useState } from 'react';

function InsertPage() {
  const [formData, setFormData] = useState({
    // Initialize your form fields here
    title: '',
    description: '',
    // ... other fields
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // Clear form after submission
    setFormData({
      title: '',
      description: '',
      // ... other fields
    });
  };

  return (
    <div>
      <h1>Insert Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        {/* Add more input fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InsertPage;