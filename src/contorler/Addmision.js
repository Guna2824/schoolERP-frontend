import React, {useState} from 'react'

function Addmision({click}) {

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    standard: '',
    gender: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Student Name validation
    if (!formData.studentName) {
      tempErrors['studentName'] = 'Student Name is required';
      isValid = false;
    }

    // Parent Name validation
    if (!formData.parentName) {
      tempErrors['parentName'] = 'Parent Name is required';
      isValid = false;
    }

    // Standard validation
    if (!formData.standard) {
      tempErrors['standard'] = 'Standard (Class) is required';
      isValid = false;
    }

    // Gender validation
    if (!formData.gender) {
      tempErrors['gender'] = 'Gender is required';
      isValid = false;
    }

    // Date of Birth validation
    if (!formData.dob) {
      tempErrors['dob'] = 'Date of Birth is required';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      tempErrors['phone'] = 'Phone number is required';
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      tempErrors['phone'] = 'Phone number should contain only digits';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      tempErrors['email'] = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors['email'] = 'Email is not valid';
      isValid = false;
    }

    // Address validation
    if (!formData.address) {
      tempErrors['address'] = 'Address is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // alert('Form submitted successfully');
      // Here you can send `formData` to an API
      click(formData)
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className=" bg-white p-5 flex flex-col justify-center items-start ">
      <h2 className="text-2xl font-semibold mb-4">Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Student Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter student name"
          />
          {errors.studentName && <span className="text-red-500">{errors.studentName}</span>}
        </div>

        {/* Parent Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Parent Name</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter parent name"
          />
          {errors.parentName && <span className="text-red-500">{errors.parentName}</span>}
        </div>

        {/* Standard (Class) */}
        <div className="mb-4">
          <label className="block text-gray-700">Standard (Class)</label>
          <select
            name="standard"
            value={formData.standard}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Class</option>
            <option value="PreKG">PreKG</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.standard && <span className="text-red-500">{errors.standard}</span>}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-red-500">{errors.gender}</span>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.dob && <span className="text-red-500">{errors.dob}</span>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter phone number"
          />
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter email address"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter your address"
          />
          {errors.address && <span className="text-red-500">{errors.address}</span>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addmision