import { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid.';
    }
    if (!formData.message) errors.message = 'Message is required.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setErrors({});
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      {submitted && <p>Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
