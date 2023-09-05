import { restaurantList } from "../constants";
import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { ShimmerPostList } from "react-shimmer-effects-18";


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
        console.log(json);
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

    return allRestaurants.length === 0 ? (
      <div className="mx-auto m-5" style={{ width: "78.125rem" }}>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
      </div>
    ) : (
        <>
        <div className="p-5 bg-pink-50 my-5">
            <input
            data-testid="search-input"
            type="text"
            className="border border-solid border-black"
            placeholder="Search input"
            value={searchText}
            onChange={(e)=> {
            setSearchText(e.target.value);
            }}
            />
            <button
            data-testid="search-btn"
            className="p-2 m-2  bg-purple-900 hover:bg-violet-600 text-white rounded-md"
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
        <div className="pl-12 flex flex-wrap items-center" data-testid="res-list">
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