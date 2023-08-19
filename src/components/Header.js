import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";
import { useSelector } from "react-redux";
const Title= ()=> (
    <a href="/">
        <img className="h-28 p-2" src={Logo} alt="logo"/>
    </a>
    );
     
    
    
    //composing component
    const Header=()=> {
        const [isLoggedIn, setIsLoggedIn] = useState(true);
        const isOnline = useOnline();
        const cartItems = useSelector(store => store.cart.items);
        return (
            <div className="flex justify-between bg-pink-50 shadow-lg">
                <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/">
                        <li className="px-2">Home</li>
                        </Link>
                    <Link to="/about">
                        <li className="px-2">About</li>
                        </Link>
                        <Link to="/contact">
                        <li className="px-2">Contact</li>
                        </Link>
                        <Link to="/instamart">
                        <li className="px-2">Instamart</li>
                    </Link>
                    <Link to="/cart">
                    <li className="px-2">Cart- {cartItems.length} items</li>
                    </Link>
                </ul>
            </div>
            <div>
                <h1>{isOnline ? "🟢" : "🔴"}</h1>
                {isLoggedIn ? (
                    <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
                    ) : (
                    <button onClick={()=> setIsLoggedIn(true)}>Login</button>
                )}
            </div>
            </div>
        );
    };
    export default Header;