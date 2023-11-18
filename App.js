const parent = React.createElement(
    "div",
    { id: "parent"},
     React.createElement
     ("div",
      {id: "child"},
       [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")])
       );



console.log(parent);

// const heading  = React.createElement("h1", 
// { id: "heading" }, 
// "Hello world from React");

// console.log(heading);
        
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

root.render(parent);