import React from 'react'
import './App.css'

// added a props in my tweet parameter
// i can access the name by writing props.name
// remember to add in curly braces to use jsx/javascript code, anything
// outside of that is considered regular html
function Tweet(props){
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>{props.likes}</h3>
        </div>

    )
}

export default Tweet