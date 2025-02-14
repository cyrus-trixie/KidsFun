import React, { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      setIsSuccess(false);
      return;
    }
  
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname, lastname, email, password }),
    })
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setMessage(data.message);
        setIsSuccess(true);
   //clear the input value after 2 secs
   setTimeout(()=>{
    setEmail('');
    setFirstname('');
    setConfirmPassword('');
    setLastname('');
    setPassword('')
     },2000);

        if (data.success) {
          window.location.href = '/index.html'; // Redirect after successful signup
        
        }
      })
      .catch((error) => {
        setMessage('An error occurred. Please try again.');
        setIsSuccess(false);
        console.error(error);
      });
  };


  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>Password</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span>Confirm password</span>
        </label>

        <button className="submit" type="submit">
          Submit
        </button>

        <p className="signin">
          Already have an account? <Link  to="/signin">Sign in</Link>
        </p>

        {/* Message */}
        {message && (
          <p className={`message ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
