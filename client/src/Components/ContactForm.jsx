import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      emailjs.sendForm('mein_emailjs_dienst', 'meine_vorlage', e.target, 'user_YOUR_USER_ID')
        .then((result) => {
          console.log('Erfolgreich gesendet:', result.text);
          setIsOpen(false);
        }, (error) => {
          console.error('Fehler beim Senden:', error.text);
        });

      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Bitte füllen Sie alle Felder aus.');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Contact </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" id="name" name="from_name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail:</label>
                    <input type="email" id="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht:</label>
                    <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                  </div>
                  <div className="flex justify-end">
                    <button type="button" onClick={handleClose} className="flex items-center justify-center mx-auto sm:px-4 md:px-6 lg:px-8 text-xl font-bold text-cbb26a bg-black font-bold text-cbb26a text-center imageBorderLogo py-2 px-4 rounded-md transition duration-300 hover:text-white mt-4">Abort</button>
                    <button type="submit" className="flex items-center justify-center mx-auto sm:px-4 md:px-6 lg:px-8 text-xl font-bold text-cbb26a bg-black font-bold text-cbb26a text-center imageBorderLogo py-2 px-4 rounded-md transition duration-300 hover:text-white mt-4">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;