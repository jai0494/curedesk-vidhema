import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    clinicName: '',
    doctorName: '',
    branchName: '',
    mobile: '',
    email: '',
    type: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: formData.clinicName,
      manager: {
        name: formData.doctorName,
        email: formData.email,
        mobile: formData.mobile,
      },
      branch: [{ branch: formData.branchName }],
      type: formData.type,
      approval: 'Approved',
    };

    try {
      const response = await axios.post('https://dhor.clinic.api.stageprojects.xyz/clients/add', payload);
      console.log('Response:', response.data);
      if (response.data.message === "User with this mobile No. or Email Id already exist") {
        toast.error("User with this mobile No. or Email Id already exist");
      }
      else{
      // Reset the form fields after successful submission
        setFormData({
          clinicName: '',
          doctorName: '',
          branchName: '',
          mobile: '',
          email: '',
          type: '',
        });
        toast.success("Thank you for contacting Us. Curedesk team will contact you soon");
      }
    } catch (error: any) {
      if (error.response && error.response.data.message === "User with this mobile No. or Email Id already exist") {
        toast.error("User with this mobile No. or Email Id already exist");
      } else {
        console.log('Error submitting form:', error);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-5">
      <ToastContainer />
      <h4 className='text-2xl md:text-4xl/tight font-bold text-black mt-2 font-nunito mb-7 text-center'>Create Your Clinic in 2 minutes</h4>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
        
        {/* Clinic Name Input */}
        <div className='flex-[0_0_49%] mb-5'>
          <label htmlFor="clinicName" className="font-nunito block text-sm font-bold text-gray-900">Clinic Name</label>
          <input
            type="text"
            name="clinicName"
            id="clinicName"
            value={formData.clinicName}
            onChange={handleInputChange}
            className="mt-1 text-slate-700 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Clinic Name"
            required
          />
        </div>

        {/* Dr. Name Input */}
        <div className='flex-[0_0_49%] mb-5'>
          <label htmlFor="doctorName" className="font-nunito block text-sm font-bold text-gray-900">Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            id="doctorName"
            value={formData.doctorName}
            onChange={handleInputChange}
            className="mt-1 text-slate-700 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Dr. Name"
            required
          />
        </div>

        {/* Branch Name Input */}
        <div className='flex-[0_0_49%] mb-5'>
          <label htmlFor="branchName" className="font-nunito block text-sm font-bold text-gray-900">Branch Name</label>
          <input
            type="text"
            name="branchName"
            id="branchName"
            value={formData.branchName}
            onChange={handleInputChange}
            className="mt-1 text-slate-700 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Branch Name"
            required
          />
        </div>

        {/* Mobile Number Input */}
        <div className='flex-[0_0_49%] mb-5'>
          <label htmlFor="mobile" className="font-nunito block text-sm font-bold text-gray-900">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="mt-1 text-slate-700 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Mobile Number"
            required
          />
        </div>

        {/* Email Input */}
        <div className='flex-[0_0_49%] mb-5'>
          <label htmlFor="email" className="font-nunito block text-sm font-bold text-gray-900">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 text-slate-700 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>

        {/* Type Dropdown */}
        <div className='flex-[0_0_49%] mb-5'>
          <label htmlFor="type" className="font-nunito block text-sm font-bold text-gray-900">Type</label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleInputChange}
            className="mt-1 text-slate-400 font-nunito block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Allopathy">Allopathy</option>
            <option value="Homeopathy">Homeopathy</option>
          </select>
        </div>
        {/* Other Input Fields */}
        {/* ... */}

        {/* Submit Button */}
        <div className='flex-[0_0_100%] mb-3'>
          <button
            type="submit"
            className="mt-4 font-nunito inline-block py-2 px-10 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
