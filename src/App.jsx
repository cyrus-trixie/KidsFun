import BookingPage from "./components/BookingPage";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

import SignUp from "./components/SignUp";
import BusinessRegistration from './components/BusinessRegistration';
import { Route,Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/booking" element={<BookingPage/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/businessRegistration" element={<BusinessRegistration/>}></Route>

     </Routes>
       
    
    </>
  );
}

export default App;
