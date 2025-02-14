import React from "react";
import Navbar from "./Navbar";

const BookingPage = ( ) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <div className="p-20">
        <div id="cards" className="flex justify-center flex-wrap gap-14">
          {/* First Card */}
          <section className="flex flex-col items-center space-y-2 border rounded-lg shadow-md md:h-[380px] md:w-[350px] h-[350px] w-[300px]">
            <img
              src="/assets/foodiesfeed.com_cheeseburger.jpg"
              alt="Hadassa Services"
              className="w-full h-[40%] object-cover rounded-t-lg"
            />
            <h1 className="text-sm md:text-lg font-semibold mt-2">Hadassa Catering</h1>
            <p className="text-xs md:text-sm mt-1 text-center">
              Personalized meal plans for any event. From weddings to corporate gatherings, we create culinary masterpieces for you.
            </p>
            <p className="text-lg font-bold mt-2">Price: Ksh 15,000 - 50,000</p>
            <p className="text-sm mt-1">Location: Nairobi, Kenya</p>
            <a
              href="booking-form.html?business=hadassa-catering"
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Choose Service
            </a>
          </section>

          {/* Second Card */}
          <section className="flex flex-col items-center space-y-2 border rounded-lg shadow-md md:h-[380px] md:w-[350px] h-[350px] w-[300px]">
            <img
              src="/assets/foodiesfeed.com_traditional-iranian-saffron-rice-with-raisins.jpg"
              alt="Mama Jimmy Dishes"
              className="w-full h-[40%] object-cover rounded-t-lg"
            />
            <h1 className="text-sm md:text-lg font-semibold mt-2">Mama Jimmy Dishes</h1>
            <p className="text-xs md:text-sm mt-1 text-center">
              Authentic home-style meals for your event. From hearty stews to mouthwatering sides, we deliver flavor to your table.
            </p>
            <p className="text-lg font-bold mt-2">Price: Ksh 12,000 - 40,000</p>
            <p className="text-sm mt-1">Location: Mombasa, Kenya</p>
            <a
              href="booking-form.html?business=mama-jimmy-dishes"
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Choose Service
            </a>
          </section>

          {/* Third Card */}
          <section className="flex flex-col items-center space-y-2 border rounded-lg shadow-md md:h-[380px] md:w-[350px] h-[350px] w-[300px]">
            <img
              src="/assets/foodiesfeed.com_healthy-food.jpg"
              alt="Green Leaf Catering"
              className="w-full h-[40%] object-cover rounded-t-lg"
            />
            <h1 className="text-sm md:text-lg font-semibold mt-2">Green Leaf Catering</h1>
            <p className="text-xs md:text-sm mt-1 text-center">
              Healthy, plant-based menus with fresh organic ingredients for your event. Nutritious and bursting with flavor!
            </p>
            <p className="text-lg font-bold mt-2">Price: Ksh 18,000 - 45,000</p>
            <p className="text-sm mt-1">Location: Kisumu, Kenya</p>
            <a
              href="booking-form.html?business=green-leaf-catering"
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Choose Service
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
