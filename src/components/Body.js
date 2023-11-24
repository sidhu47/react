import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4158094&lng=78.37106779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        const arrayOfCards = json.data.cards;
        const restaurant_list_id = "restaurant_grid_listing";

        for (const cardObj of arrayOfCards) {
            if (cardObj.card.card && cardObj.card.card.id === restaurant_list_id) {
              const restaurantList = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
              setListOfRestaurants(restaurantList);
              setFilteredRestaurants(restaurantList);
            }
        }
    };

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    setListOfRestaurants(
                        listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating > 4
                    ));
                }}>Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
            {
              filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
            </div>
        </div>
    );
}

export default Body;