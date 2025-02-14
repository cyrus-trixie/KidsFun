

const Banner = () => (
  <section className="relative w-full h-80">
    <img src="/assets/banne.avif" alt="Catering Banner" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex items-center">
      <div className="pl-10">
        <h1 className="text-4xl font-bold text-green-800">
          Plan Your Event Meals & Budget <br /> With Ease
        </h1>
        <p className="text-lg text-green-800 mt-2">
          Calculate food costs and meal plans in just a few clicks.
        </p>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ imgSrc, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-md" />
    <h2 className="text-xl font-semibold mt-4 text-green-700">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const Services = () => (
  <section className="container mx-auto py-12 px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Our Key Features</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        imgSrc="https://source.unsplash.com/400x250/?restaurant,menu"
        title="Custom Recipe Budgeting"
        description="Enter your ingredients, and we calculate the cost based on the quantity needed."
      />
      <ServiceCard
        imgSrc="https://source.unsplash.com/400x250/?chef,cooking"
        title="Predefined Meal Budgeting"
        description="Select from a list of common dishes, input guest numbers, and get a full budget breakdown."
      />
      <ServiceCard
        imgSrc="https://source.unsplash.com/400x250/?calculator,food"
        title="Real-time Cost Estimation"
        description="Get instant estimates on food costs based on market rates."
      />
      <ServiceCard
        imgSrc="https://source.unsplash.com/400x250/?catering,event"
        title="Event Catering Planning"
        description="Optimize meal planning for weddings, parties, corporate events, and more."
      />
      <ServiceCard
        imgSrc="https://source.unsplash.com/400x250/?grocery,list"
        title="Automatic Ingredient List"
        description="Generate a detailed list of required ingredients based on your event size."
      />
      <ServiceCard
        imgSrc="https://source.unsplash.com/400x250/?payment,invoice"
        title="Cost Tracking & Reports"
        description="Monitor your catering budget with automatic cost summaries and reports."
      />
    </div>
  </section>
);

const CallToAction = () => (
  <section className="bg-green-600 text-white text-center py-10 mt-12">
    <h2 className="text-3xl font-bold">Start Planning Your Catering Budget Today!</h2>
    <p className="mt-2 text-lg">Get accurate cost estimates and meal plans for your event in seconds.</p>
    <button className="mt-4 bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
      Try Now
    </button>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-6">
    <p>&copy; 2025 Event Catering WebSystem | All Rights Reserved.</p>
  </footer>
);

const App = () => (
  <div className="bg-gray-100">
    <Navbar />
    <Banner />
    <Services />
    <CallToAction />
    <Footer />
  </div>
);

export default App;
