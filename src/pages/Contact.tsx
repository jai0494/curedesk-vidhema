import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import KeyFeatureGrid from '../component/KeyFeatureGrid';

const Contact: React.FC = () => {
  const [resultMessage, setResultMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setResultMessage(''); // Clear previous result message when user types
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessages({ fullName: '', email: '', message: '' });
    setResultMessage('Sending...');

    let hasError = false;

    if (!formData.fullName) {
      setErrorMessages((prev) => ({ ...prev, fullName: 'Please provide your full name.' }));
      hasError = true;
    }

    if (!formData.email) {
      setErrorMessages((prev) => ({ ...prev, email: 'Please provide a valid email.' }));
      hasError = true;
    }

    if (!formData.message) {
      setErrorMessages((prev) => ({ ...prev, message: 'Please provide a message.' }));
      hasError = true;
    }

    if (hasError) return;

    const json = JSON.stringify({ ...formData, access_key: 'YOUR_ACCESS_KEY_HERE' });

    try {
      const response = await fetch('https://dhor.clinic.api.stageprojects.xyz/contact/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });
      const jsonResponse = await response.json();
      console.log("jsonResponse",jsonResponse)
      toast.success("Thank you for contacting Us. The Curedesk team will contact you soon");
      // Check for specific error messages
      if (jsonResponse.message.includes('already exist')) {
        setResultMessage(jsonResponse.message); // Show server message if email or number already exists
      } else {
        setResultMessage(jsonResponse.message); // Otherwise, show general message
        // Reset the form fields only if there are no errors
        setFormData({ fullName: '', email: '', message: '' });
      }
    } catch (error) {
      console.log(error);
      setResultMessage('Something went wrong!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="mt-16 text-center">
        <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl font-nunito font-bold">Revolutionizing Healthcare with Connectivity</h1>
        <p className="text-lg mt-4 text-slate-600">We are here to help.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <div className='max-w-[80%]'>
          <h2 className="font-bold text-3xl text-gray-800 font-nunito">Connecting Healthcare With AI Driven Technology And Empowering Lives: Reach Out To Us Today</h2>
          <p className="text-lg leading-relaxed text-slate-500 mt-3 font-nunito">
          Experience the future of healthcare with our cutting-edge software. Contact us for a free demo and discover how our solutions can improve efficiency, enhance patient care, and drive your practice's success.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-2xl text-gray-800">Contact Form</h2>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errorMessages.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errorMessages.fullName}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errorMessages.email && (
                  <p className="mt-1 text-sm text-red-600">{errorMessages.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errorMessages.message && (
                  <p className="mt-1 text-sm text-red-600">{errorMessages.message}</p>
                )}
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {resultMessage && (
            <p className={`mt-4 text-sm ${resultMessage.includes('wrong') || errorMessages.email ? 'text-red-600' : 'text-green-600'}`}>
              {resultMessage}
            </p>
          )}
        </div>
      </div>
      <div className='bg-[#e6edff] p-[30px] pt-[20px] rounded-[30px] mt-10 mb-10'>
        <KeyFeatureGrid />
      </div>
    </div>
  );
};

export default Contact;
