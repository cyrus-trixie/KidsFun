import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Clear any previous messages
    setErrorMessage('');
    setSuccessMessage('');
  
    try {
      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then((response) => response.json()) //  return JSON
      .then((data) => {
        if (data.success) {
          setSuccessMessage(data.message); // Display success message
         navigate('/dashboard');

        } else {
          setErrorMessage(data.message); //  Display error message
        }
      })
      .catch((error) => {
        setErrorMessage('An error occurred while trying to login.');
        console.error(error);
      });
  
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      console.error(error);
    }
  };
  

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">Signin</h2>

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Signin
        </button>
      </form>

      {/* Error and Success Messages */}
      {errorMessage && <div className="text-red-500 text-sm mt-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 text-sm mt-4">{successMessage}</div>}
    </div>
    </div>
    
    </>
  
  );
};

export default Signin;
