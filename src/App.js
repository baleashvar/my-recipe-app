import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import Idli from "./assets/img/idli.png";
import Speghetti from "./assets/img/speghetti.png";


function App() {
    const recipe=[
        {
            name: "Idli",
            image: Idli,
            description:"Idli is the best breakfast",
            mealType:"breakfast",
            dietaryRestrictions:"vegetarian"
        },
        {
            name: "Speghetti",
            image: Speghetti,
            description:"Speghetti is good italian food",
            mealType:"lunch",
            dietaryRestrictions:"vegan"
        }
    ]
    return( 
    <div>
        <RecipeList reciepe={recipe}/>
    </div> ); 
}

export default App;