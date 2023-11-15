import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    dob: '',
    placeOfOrigin: '',
    age: '',
    gender: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Number:
        <input type="text" name="number" value={formData.number} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <label>
        Place of Origin:
        <input type="text" name="placeOfOrigin" value={formData.placeOfOrigin} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
