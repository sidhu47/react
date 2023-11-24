import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("");
        const json = await data.json();

        console.log(json);
        setRestaurantInfo(json.data);
    };

    return restaurantInfo === null ? <Shimmer/> : (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Food 1</li>
                <li>Food 2</li>
                <li>Food 3</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;