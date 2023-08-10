import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";
const Title= ()=> (
    <a href="/">
        <img className="logo" src={Logo} alt="logo"/>
    </a>
    );
    
    
    
    //composing component
    const Header=()=> {
        const [isLoggedIn, setIsLoggedIn] = useState(true);
        const isOnline = useOnline();
        return (
            <div className="header">
                <Title/>
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                        </Link>
                    <Link to="/about">
                        <li>About</li>
                        </Link>
                        <Link to="/contact">
                        <li>Contact</li>
                        </Link>
                    <li>Cart</li>
                    <Link to="/instamart">
                        <li>Instamart</li>
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