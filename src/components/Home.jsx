import Navbar from './Navbar';
import Banner from './Banner';
import { useEffect } from 'react';

import img1 from "../assets/foodiesfeed.com_cheeseburger.jpg"
import img2 from "../assets/foodiesfeed.com_traditional-iranian-saffron-rice-with-raisins.jpg"
import img3 from "../assets/foodiesfeed.com_healthy-food.jpg"
import { useState } from 'react';
export default function Home( ){
        const [numberOfPeople, setNumberOfPeople] = useState('');
        const [selectedDishes, setSelectedDishes] = useState({
          pilauDish: false,
          nyamaChoma: false,
          chapati: false,
          ugali: false,
          mukimo: false,
          samaki: false,
        });

      
        const dishPrices = {
          pilauDish: 200,
          nyamaChoma: 300,
          chapati: 20,
          ugali: 30,
          mukimo: 150,
          samaki: 250,
        };
        const [totalCost,setTotalCost]=useState(0);
      
        const handleCheckboxChange = (e) => {
          const { id, checked } = e.target;
          setSelectedDishes((prev) => ({
            ...prev,
            [id]: checked,
          }));
        };
      
        const calculateTotalCost = () => {
            let totalCost = 0;
            const peopleCount = Number(numberOfPeople) || 0; // Ensure it's a number
          
            for (const [dish, price] of Object.entries(dishPrices)) {
              if (selectedDishes[dish]) {
                totalCost += peopleCount * price;
              }
            }
            return totalCost;
          };
          
  

        useEffect(() => {
            setTotalCost(calculateTotalCost());
          }, [numberOfPeople, selectedDishes]);

    return(
        <>
        <div>
            <Navbar/>
            <Banner 
  H1='Welcome to the' 
  H2='Event Catering Platform' 
  H3='Simplified Catering' 
  P1='Plan events and manage catering with ease.' 
  P2='For clients and businesses alike, we make catering seamless.' 
/>



            <div id="cards" class="flex justify-center flex-wrap gap-14 h-screen">
      <section class="flex flex-col items-center space-y-2 border rounded-lg shadow-md md:h-[400px] md:w-[350px] h-[350px] w-[300px]" data-aos="fade-up" data-aos-duration="1000">
        <img src={img1} alt="" class="w-full h-[50%] object-cover rounded-t-lg"/>
        <h1 class="text-base md:text-xl font-semibold mt-2">Food Planning</h1>
        <p class="text-sm md:text-base mt-1">Our platform provides a comprehensive tool to help you plan and budget for your event's food needs.</p>
      </section>
      <section class="flex flex-col  items-center space-y-2 border rounded-lg shadow-md md:h-[400px] md:w-[350px] h-[350px] w-[300px]" data-aos="fade-up" data-aos-duration="1000">
        <img src={img2} alt="" class="w-full h-[50%] object-cover rounded-t-lg"/>
        <h1 class="text-base md:text-xl font-semibold mt-2">Start Planning</h1>
        <p class="text-sm md:text-base mt-1">With our intuitive interface, you can input the number of guests, the types of food you want to serve,and our algorithm will provide a detailed budget and suggested menu</p>
      </section>
      <section class="flex flex-col items-center space-y-2 border rounded-lg shadow-md md:h-[400px] md:w-[350px] h-[350px] w-[300px]" data-aos="fade-up" data-aos-duration="1000">
        <img src={img3} alt="" class="w-full h-[50%] object-cover rounded-t-lg"/>
        <h1 class="text-base md:text-xl font-semibold mt-2">Event Budgeting</h1>
        <p class="text-sm md:text-base mt-1">Our tool takes the gueswork out of event planning by providing real-time cost estimates and recommendations to stay within your budget</p>
      </section>
    </div>
 
{/**Body */}
<div className='flex justify-center items-center'>
<div class="flex justify-center items-center fixed right-0 top-1/2 transform -translate-y-1/2 p-2 shadow-lg rounded-full h-24 w-24 bg-green-800" >
      <p class="text-white">ksh.<span id="budgetCalc1Output" >{totalCost}</span></p>
    </div>

  <div class=" h-screen p-10 ">
 <div class="mt-10 flex justify-center items-center">
  <section class="flex flex-col space-y-2  ">
    <label class="font-2xl font-semibold">*NUMBER OF PEOPLE TO BE CATERED</label>
    <input type="number" name="" id="numberOfPeople" placeholder="Enter Number of guests" class="p-2 border rounded-md" value={numberOfPeople}  onChange={(e) => setNumberOfPeople(e.target.value)} />  
  </section>
 </div>
 


 <div class="mt-10 flex flex-col space-y-4">
  <h1 class="text-3xl font-semibold">Main Dishes</h1>
  <hr/>
  <section class="ml-20 flex flex-col space-y-2">
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="pilauDish" value="200"  checked={selectedDishes.pilauDish} 
  onChange={handleCheckboxChange} />
      <p>Pilau – Spiced rice cooked with meat (beef, chicken, or goat). <span class="text-gray-500">(Approx. 200 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="nyamaChoma" value="300"  checked={selectedDishes.nyamaChoma} 
  onChange={handleCheckboxChange} />
      <p>Nyama Choma – Grilled meat, usually beef or goat. <span class="text-gray-500">(Approx. 300 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="chapati" value="20"  checked={selectedDishes.chapati} 
  onChange={handleCheckboxChange} />
      <p>Chapati – Soft, layered flatbread. <span class="text-gray-500">(Approx. 20 Ksh per piece)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="ugali" value="30"  checked={selectedDishes.ugali} 
  onChange={handleCheckboxChange} />
      <p>Ugali – Maize flour staple, best paired with stews or vegetables. <span class="text-gray-500">(Approx. 30 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="mukimo" value="150"  checked={selectedDishes.mukimo} 
  onChange={handleCheckboxChange} />
      <p>Mukimo – Mashed potatoes with greens, maize, and beans. <span class="text-gray-500">(Approx. 150 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="samaki" value="250"  checked={selectedDishes.samaki} 
  onChange={handleCheckboxChange} />
      <p>Samaki – Fried or stewed fish, especially tilapia. <span class="text-gray-500">(Approx. 250 Ksh per person)</span></p>
    </section>
  </section>
</div>

<div class="mt-10 flex flex-col space-y-4">
  <h1 class="text-3xl font-semibold">Stews and Sauces</h1>
  <hr/>
  <section class="ml-20 flex flex-col space-y-2">
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="beefStew" value="250"/>
      <p>Beef/Goat Stew – Slow-cooked meat in a flavorful tomato-based sauce. <span class="text-gray-500">(Approx. 250 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="chickenCurry" value="300"/>
      <p>Chicken Curry – Spiced chicken in a creamy sauce. <span class="text-gray-500">(Approx. 300 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="sukumaWiki" value="50"/>
      <p>Sukuma Wiki – Sautéed collard greens, often served as a side dish. <span class="text-gray-500">(Approx. 50 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="beansStew" value="80"/>
      <p>Beans or Ndengu Stew – A vegetarian-friendly lentil or green gram option. <span class="text-gray-500">(Approx. 80 Ksh per person)</span></p>
    </section>
  </section>
</div>

<div class="mt-10 flex flex-col space-y-4">
  <h1 class="text-3xl font-semibold">Side Dishes</h1>
  <hr/>
  <section class="ml-20 flex flex-col space-y-2">
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="rice" value="100"/>
      <p>Rice – Plain, coconut, or vegetable fried rice. <span class="text-gray-500">(Approx. 100 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="kachumbari" value="50"/>
      <p>Kachumbari – Fresh tomato and onion salad, with a splash of lemon. <span class="text-gray-500">(Approx. 50 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="potatoChips" value="150"/>
      <p>Potato Wedges or Chips – A favorite for kids and modern palates. <span class="text-gray-500">(Approx. 150 Ksh per person)</span></p>
    </section>
  </section>
</div>

<div class="mt-10 flex flex-col space-y-4">
  <h1 class="text-3xl font-semibold">Snacks and Starters</h1>
  <hr/>
  <section class="ml-20 flex flex-col space-y-2">
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="samosas" value="50"/>
      <p>Samosas – Fried pastry filled with minced meat or vegetables. <span class="text-gray-500">(Approx. 50 Ksh per piece)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="bhajias" value="80"/>
      <p>Bhajias – Deep-fried potato slices coated in seasoned chickpea flour batter. <span class="text-gray-500">(Approx. 80 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="mandazi" value="30"/>
      <p>Mandazi – Sweet fried dough, similar to donuts. <span class="text-gray-500">(Approx. 30 Ksh per piece)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="corn" value="40"/>
      <p>Corn on the Cob – Grilled or boiled maize. <span class="text-gray-500">(Approx. 40 Ksh per cob)</span></p>
    </section>
  </section>
</div>

<div class="mt-10 flex flex-col space-y-4">
  <h1 class="text-3xl font-semibold">Desserts</h1>
  <hr/>
  <section class="ml-20 flex flex-col space-y-2">
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="fruitSlice" value="50"/>
      <p>Mango or Pineapple Slices – Fresh tropical fruits. <span class="text-gray-500">(Approx. 50 Ksh per serving)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="coconutRice" value="150"/>
      <p>Sweetened Coconut Rice – A dessert version of pilau. <span class="text-gray-500">(Approx. 150 Ksh per person)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="madafu"  value="70"/>
      <p>Madafu – Fresh coconut water served in the shell. <span class="text-gray-500">(Approx. 70 Ksh per shell)</span></p>
    </section>
  </section>
</div>

<div class="mt-10 flex flex-col space-y-4">
  <h1 class="text-3xl font-semibold">Drinks</h1>
  <hr/>
  <section class="ml-20 flex flex-col space-y-2">
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="chai" value="30"/>
      <p>Chai – Kenyan tea made with milk, sugar, and spices. <span class="text-gray-500">(Approx. 30 Ksh per cup)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="mursik" value="50"/>
      <p>Mursik – Traditional fermented milk (popular in Rift Valley regions). <span class="text-gray-500">(Approx. 50 Ksh per serving)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="juice" value="100"/>
      <p>Fresh Juices – Mango, passion fruit, or hibiscus (known as "sobo"). <span class="text-gray-500">(Approx. 100 Ksh per serving)</span></p>
    </section>
    <section class="flex space-x-4 items-center">
      <input type="checkbox" id="soda" value="40"/>
      <p>Soda – Soft drinks like Coca-Cola, Fanta, and Sprite are common. <span class="text-gray-500">(Approx. 40 Ksh per bottle)</span></p>
    </section>
  </section>
</div>



     

  </div>

</div>




        </div>
        </>
    );
}