import Logo from '../assets/dish-spoon-knife-icon.png'
import { Outlet, Link } from "react-router-dom";
export default function Navbar (){
    return (
        <>
         {/* Navbar */}
      <nav className="flex justify-around items-center p-2 bg-white shadow-lg fixed w-full">
        <img src={Logo} alt="logo" className="w-10" />
        <ul className="hidden md:flex space-x-8 text-green-800">
        <li><Link to='/home'>Home</Link></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><Link to='/contact'>Contact us</Link></li>
          <li>
  <Link 
    to="/booking" 
    className=" px-6 py-2 mt-4  bg-green-800 text-white rounded-lg hover:bg-green-700 transition-all"
  >
    Book Catering Services
  </Link>
</li>

        </ul>
      </nav>
        </>
    );
}