# React notes

# Parcel 
- Dev Build
- Loacal Server
- HMR = Hot module replacement
- File watching algorithm - written in C++
- Gives faster builds because of the caching
- Image Optimization
- Minifification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - supports older browsers
- Diagnostics
- Error handling
- Https suppport as well
- Tree Shaking - Removes unused code
- Different dev and prod pundles
- Remove main in package.json when you use "build" argument when creating production build
- Use browserslist in package.json to specify the support for older versions of browsers

# JSX
 - JSX is not html in JS but it has Html or xml like syntax.
 - JSX is different and React is different.
 - In the core of react, react uses JSX because try console.log() using jsx sytax and React.createElement() and print both of them the object will be same.
 - Parcel transpiles the JSX code to react code using babel, so that it will be understood by JS engine.
 - JSX does not allow syntax similar to HTML. (Ex: It doesn't allow the class attribute but in JSX it should be "className" in camel case. Doesn't allow "-" (Use camel case)).
 - If you want to write the JSX in multiple lines you need to wrap the JSX inside parenthesis.
 - Inside JSX you can write JS code inside {}.
 - JSX also takes care of avoiding cross-site scripting attacks.

# Babel
- Babel is a Javascript compiler
- Converts one code to another code (Transpiler).

# React Compontents
- Two types of components
    > Class based component. - **OLD way** 

    > Functional component. - **New way**

**React Functional Component**: It's just a normal javascript function which returns some JSX element(React element). Always start with a capital letter when you create a functional component. You can put react component, react element inside each other in all the possible permutations.
```
// React Functional Component 
const HeadingComponent = () => {
    //Component Composition
    return <div id="container">
                {title}
                <h1 className="heading">Hello from the react func component</h1>
           </div>;
}
```

**Exporting a component:** Two ways to export a component.
* Default Export/Import (Only use this when there is only single component to export)
```
import Component from "path"
```
* Named Export/Import (Use this when there are multiple things to export)
```
import {Component} from "path"
```
> [!CAUTION]
> When you export a json or any data from a file and when you try to alter the data in another file it's not allowed 

# Props
Props are just like arguments passed to a function

- Each child in a list should have a unique "key" prop.
- Whenever you're looping over something and passing attributes to props pass a <b>UNIQUE KEY</b>(UUID) along with it. This is because when we have components at same level each component should be uniquely represented because react tries to optimize the number of renders. This will highly boost the performance of the react app because the number of renders will be reduced. React suggests not to use the index as a key. Check episode 4 `(2:01:26)`. Read this article for in depth explanation (https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)


# HOOKS
A react hook is a normal js utility functions written inside react which are ready to use by importing them.

<br>Two important hooks</br>
- `useState()` - Superpowerful State variable (import as a named import). It mainitans the state of the component. Whenever a state variable changes react re-renders the component.

> [!IMPORTANT]
> This will keep the UI layer in sync with the data layer.

> [!IMPORTANT]
> Always create `useState()` variable inside the component and try to declare them at the top of the component as a good practice. Never declare `useState()` inside if-else blocks or any conditions or any loops as it will cause inconsistencies.

```
const [variableName, functionUsedToUpdateTheContentsOfTheVariable] = useState([]); 
// [] is the default value that you want to pass to the state variable.

//UPDATING THE STATE DATA
functionUsedToUpdateTheContentsOfTheVariable(newData);
```
- `useEffect()` - Just a normal JS function which has two arguments. First argument is an arrow function and the second argument is the dependency array. This will be called everytime after a component renders. Once the render is done the call back function in the first argument will be invoked. Dependency array changes the behavior of the render.  If there is a

> [!NOTE]
> Below are different usecases of using dependency array.
* If no dependency array is present useEffect() is called on every render.
* If empty dependency array is present useEffect() is called on initial render(just once).
* If some dependency array is present useEffect() is called when the dependency changes. 

```
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    //THIS will be called after the render is done. Executed last
    useEffect(() => {}, []);

    //THIS is executed first
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    setListOfRestaurants(
                        listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating > 4
                    ));
                }}>Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
            {
              listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
            </div>
        </div>
    );
}

export default Body;
```
> [!TIP]
> In React when ever you see an import start with `use` (Ex: useRouteError()) its a hook. As it is a common practice to name the hooks in this convention.


**Reconciliation Algorithm ([React Fiber](https://github.com/acdlite/react-fiber-architecture)) :** <br>
Whenever there is a change in state variable react uses something called `Virtual DOM` which is a representation of an actual DOM. Virtual DOM is nothing but react elements i.e JS object. It uses Diff Algorithm which finds the difference between older and newer virtual DOM's and updates the DOM on every render cycle. Check video at `01:50:00` in episode 5.

> [!IMPORTANT]
> Whenever there's a change in state variable, react triggers a reconciliation cycle (re-renders the component)

**Conditional Rendering:** Rendering based on a condition is called conditional rendering.


# ROUTER
- React router dom
- Children routes
- `createBrowserRouter`, `RouterProvider`, `Outlet`

**Two types of routing in web apps**
- Client Side Routing
- Server Side Routing

> [!IMPORTANT]
> Never use href in `<a></a>` tag to route because the whole page will be refreshed. Use `{Link} from "react-router-dom` instead which is provided by react.

# Read ABOUT
- CONFIG DRIVEN UI (Data drives the UI, data comes from configs and UI components are reused to render the config data recieved from the API)

# Revise episodes
- Episode 5 (HOOKS), Episode 6