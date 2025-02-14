import React from 'react';
import Navbar from "./Navbar";
import bannerImg from "../assets/banne.avif";
import Banner from './Banner';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div id="navbar" className="h-screen">
      {/* Navbar Section */}
      <Navbar/>

      {/* Banner Section */}
      <Banner H1='Welcome to the 'H2='  Event Catering'H3=' Web System' P1='Simplifying event catering for both clients and businesses!' P2='Our platform allows clients to easily plan' P3=' their event catering and businesses to manage their offerings with ease.'/>
     

      {/* What We Offer Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">What We Offer</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Whether you're a business offering catering services or a client planning an event, our system makes the process simple and efficient.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">For Clients</h3>
            <p className="text-gray-600">
              Easily create an event, select your dishes, and calculate your catering budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">For Businesses</h3>
            <p className="text-gray-600">
              Manage your restaurant menu, receive orders from clients, and track event schedules effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="text-center bg-green-800 text-white py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started</h2>
        <p className="text-lg mb-8">Choose how you'd like to join our platform:</p>
        <div className="flex justify-center gap-6">
          <Link
            to="/signup"
            className="bg-white text-green-800 px-6 py-3 rounded-lg text-xl font-semibold transition hover:bg-green-100"
          >
            Register as Client
          </Link>
          <Link
            to="/businessRegistration"
            className="bg-white text-green-800 px-6 py-3 rounded-lg text-xl font-semibold transition hover:bg-green-100"
          >
            Register as Business
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 text-sm bg-black text-white mt-16">
        <p>&copy; 2025 Event Catering Web System. All rights reserved.</p>
      </footer>
    </div>
  );
}
