// app.js is a component 
// what is a component?
  // . a file that holds all the logics, html and even styling in one file.
  // . a self contained piece of code

// how to create a component
// always have the below line
import React from "react";
// rather than writing all the tweet logics in the app, 
// component, i can just import my tweet component from my tweet.js
import Tweet from "./Tweet"


// create a component by also writing a function
// this function is one component
function App(){
  
  return( 
    <div className="app">
      <Tweet name="Stacy" message="When can I see Kevin" likes="100" />
      {/* multiple tweet components */}
      {/* to add custom names to tweets we can define a prop. prop is a property we can define on 
      each individual component */}
      <Tweet name="Kevin" message="Soon, very soon" likes="300"/>
      <Tweet name="Antonia" message="Woohoo" likes="100"/>
    </div> 
  )
}

export default App;
// exports this file

// created a component
// exported it 
// and in index.js file we use a ReactDom.render to render this app component

