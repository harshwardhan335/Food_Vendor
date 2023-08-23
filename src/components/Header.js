import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
     
    
    
    //composing component
    const Header=()=> {
        const [btnNameReact, setBtnNameReact] = useState("Login");
        const [isLoggedIn, setIsLoggedIn] = useState(true);
        const isOnline = useOnline();
        const { loggedInUser } = useContext(UserContext);

        // Subscribing to the store using a Selector
        const cartItems = useSelector(store => store.cart.items);

        return (
            <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
      <Link to="/">
      <img className="h-28 p-2" src={Logo} />
      </Link>
        
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
    export default Header;