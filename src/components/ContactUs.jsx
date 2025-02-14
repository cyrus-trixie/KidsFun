import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission logic
    console.log({ name, email, message });
  };

  return (
    <div>
     <Navbar/>

      <div className="p-16">
        <div className="flex h-screen justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 w-full max-w-5xl">
            <section className="flex flex-col space-y-4">
              <h1 className="text-2xl font-semibold">Get in Touch</h1>
              <h2 className="text-xl text-green-800">Let's Chat, Reach Out to Us</h2>
              <p className="text-sm text-gray-600">
                Have questions or feedback? We're here to help. Send us a message and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave Us a message"
                  className="p-2 border border-gray-300 rounded-lg h-32"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-44 p-2 rounded-lg bg-green-800 text-white hover:bg-green-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </section>

            <section className="flex flex-col space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img src="/assets/contactUs.jpg" alt="Food" className="w-full h-[200px] object-cover rounded-lg" />
              </div>

              <div className="flex space-x-4 items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
                  alt="Email"
                  className="w-8 h-8"
                />
                <section className="flex flex-col space-y-1">
                  <h3 className="font-semibold">Email</h3>
                  <h4 className="text-sm text-gray-600">Cmuiruringugi@gmail.com</h4>
                </section>
              </div>

              <div className="flex space-x-4 items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000"
                  alt="Phone"
                  className="w-8 h-8"
                />
                <section className="flex flex-col space-y-1">
                  <h3 className="font-semibold">Phone</h3>
                  <h4 className="text-sm text-gray-600">+254 742918991</h4>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ContactUs;
