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
    * Class based component. - OLD way
    * Functional component. - New way

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

# Props
Props are just like arguments passed to a function

- Each child in a list should have a unique "key" prop.
- Whenever you're looping over something and passing attributes to props pass a <b>UNIQUE KEY</b>(UUID) along with it. This is because when we have components at same level each component should be uniquely represented because react tries to optimize the number of renders. This will highly boost the performance of the react app because the number of renders will be reduced. React suggests not to use the index as a key. Check episode 4 (2:01:26). Read this article for in depth explanation (https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)


# Read ABOUT
- CONFIG DRIVEN UI (Data drives the UI, data comes from configs and UI components are reused to render the config data recieved from the API)