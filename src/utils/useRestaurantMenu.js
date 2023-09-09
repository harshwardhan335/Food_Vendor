import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    } catch {
      error(err)
        console.log(err);
    }
  }
  return resInfo;
};

export default useRestaurantMenu;
