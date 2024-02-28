import React, { useState } from 'react';

const ContactUsButton = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactButtonClick = () => {
    setShowContactForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logik für die Formularübermittlung
    console.log('Formulardaten senden:', formData);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-xs mb-2 text-cbb26a">You have any comments, please let us know</h1>
      <button
        onClick={handleContactButtonClick}
        className="bg-black font-bold text-cbb26a py-2 px-4 rounded-md transition duration-300 hover:bg-gray-800"
      >
        Message
      </button>

      {showContactForm && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative max-w-sm mx-auto bg-black rounded-md p-6">
            <button
              onClick={handleCloseContactForm}
              className="absolute top-0 right-0 p-2 text-gray-600 text-cbb26a text-sm"
            >
              Close
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-semibold text-cbb26a mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-semibold text-cbb26a mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="block text-sm font-semibold text-cbb26a mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black font-bold text-cbb26a p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsButton;