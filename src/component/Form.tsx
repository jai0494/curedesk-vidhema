// src/components/Form.tsx
import React, { useState } from 'react';
import { countries, businessTypes, specialities } from '../json/dropdownData';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    doctorName: '',
    speciality: '',
    mobile: '',
    country: '',
    email: '',
    website: '',
    businessType: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-5">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between ">
        {/* Doctor/Hospital Name Input */}
        <div className='flex-[0_0_49%] mb-3'>
          <label htmlFor="doctorName" className="font-nunito block text-sm font-medium text-gray-700">Doctor/Hospital Name</label>
          <input
            type="text"
            name="doctorName"
            id="doctorName"
            value={formData.doctorName}
            onChange={handleInputChange}
            className="mt-1 font-nunito text-slate-400 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Doctor/Hospital Name"
            required
          />
        </div>

        {/* Speciality Dropdown */}
        <div className='flex-[0_0_49%] mb-3'>
          <label htmlFor="speciality" className="font-nunito block text-sm font-medium text-gray-700">Speciality</label>
          <select
            name="speciality"
            id="speciality"
            value={formData.speciality}
            onChange={handleInputChange}
            className="mt-1 text-slate-400 font-nunito block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Speciality</option>
            {specialities.map((speciality) => (
              <option key={speciality.value} value={speciality.value}>
                {speciality.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Input with Country Code */}
        <div className='flex-[0_0_49%] mb-3'>
          <label htmlFor="mobile" className="font-nunito block text-sm font-medium text-gray-700">Mobile</label>
          <div className="flex space-x-2">
            <select
              name="countryCode"
              id="countryCode"
              className="text-slate-400 font-nunito block w-1/4 px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Code</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} - {country.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="font-nunito block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mobile Number"
              required
            />
          </div>
        </div>

        {/* Country Dropdown */}
        <div className='flex-[0_0_49%] mb-3'>
          <label htmlFor="country" className="font-nunito block text-sm font-medium text-gray-700">Select Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 text-slate-400 font-nunito block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* Email Input */}
        <div className='flex-[0_0_49%] mb-3'>
          <label htmlFor="email" className="font-nunito block text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 font-nunito text-slate-400 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Website Input */}
        <div className='flex-[0_0_49%] mb-3'>
          <label htmlFor="website" className="font-nunito block text-sm font-medium text-gray-700">Website</label>
          <input
            type="url"
            name="website"
            id="website"
            value={formData.website}
            onChange={handleInputChange}
            className="mt-1 font-nunito text-slate-400 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Website"
          />
        </div>

        {/* Business Type Dropdown */}
        <div className='flex-[0_0_100%] mb-3'>
          <label htmlFor="businessType" className="font-nunito block text-sm font-medium text-gray-700">Business Type</label>
          <select
            name="businessType"
            id="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            className="mt-1 text-slate-400 font-nunito block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Business Type</option>
            {businessTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Textarea */}
        <div className='flex-[0_0_100%] mb-3'>
          <label htmlFor="message" className="font-nunito block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 text-slate-400 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message here..."
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="mt-2 font-nunito inline-block py-2 px-10 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
