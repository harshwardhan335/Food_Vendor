import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


  const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
  
    useEffect(() => {
      getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        // optional chaining
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const isOnline = useOnline();
    if (!isOnline) {
      return <h1>Offline! Plese check your internet connection</h1>
    }
    // not render component early return
    if(!allRestaurants) return null;
    //if(filteredRestaurants?.length === 0)
   // return <h1>No restaurant match your filter</h1>

    return allRestaurants?.length===0 ? (
        <Shimmer/>
    ) : (
        <>
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=> {
            setSearchText(e.target.value);
            }}
            />
            <button
            className="search-btn"
            onClick={() => {
                // need to filter the data
                const data = filterData(searchText, allRestaurants);
                // update the state - restaurants
                setFilteredRestaurants(data);
            }}
            >
                Search
                </button>
        </div>
        <div className="restaurant-list">
    {filteredRestaurants.map((restaurant) => {
        return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
            );
        })}
      </div>
    </>
  );
};

export default Body;