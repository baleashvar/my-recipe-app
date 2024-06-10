import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";

import Idli from "./assets/img/idli.png";
import Speghetti from "./assets/img/speghetti.png";
import Tandoori from "./assets/img/tandoori.png";
import Chickenbriyani from "./assets/img/chickenbriyani.png";
import Salad from "./assets/img/salad.png"

function App() {
    const recipe=[
        {
            name: "Idli",
            image: Idli,
            description:"Idli is a popular South Indian dish that is made from fermented rice and lentil batter. It is a healthy and nutritious dish that is easy to digest and low in calories. Idlis are often eaten for breakfast or as a light snack and are usually served with chutney and sambar. They are soft, fluffy, and have a mild taste that can be enhanced by adding various spices and herbs. Idlis are not only delicious but also a great source of protein, fiber, and essential nutrients, making them a great addition to any diet.",
            mealType:"breakfast",
            dietaryRestrictions:"vegetarian"
        },
        {
            name: "Speghetti",
            image: Speghetti,
            description:"Speghetti is a type of pasta that originated in Italy and is made from wheat flour and water. It is characterized by its long, thin cylindrical shape, which is often served with various sauces, such as tomato sauce, meat sauce, or pesto. Spaghetti is a popular and versatile dish that can be prepared in a variety of ways and is enjoyed around the world. It is also commonly used in dishes such as spaghetti carbonara, spaghetti bolognese, and spaghetti aglio e olio.",
            mealType:"dinner",
            dietaryRestrictions:"vegetarian"
        },
        {
            name: "Chickenbriyani",
            image: Chickenbriyani,
            description:"Chicken biryani is a beloved rice dish that is popular in many parts of the world, particularly in the Indian subcontinent. It is a flavorful and aromatic combination of long-grain basmati rice, tender chicken pieces, a variety of spices, and sometimes vegetables or nuts. The dish is prepared by cooking the chicken and rice separately with their own set of spices, and then layering them together before garnishing with fried onions, fresh herbs, and other toppings. ",
            mealType:"lunch",
            dietaryRestrictions:"non-veg"
        },
        {
            name: "Tandoori",
            image: Tandoori,
            description:"Tandoori is a type of Indian cuisine that is characterized by the use of a traditional tandoor oven for cooking. The tandoor oven is a clay oven that is heated with charcoal or wood to very high temperatures, which imparts a distinct smoky flavor to the food cooked in it.",
            mealType:"lunch",
            dietaryRestrictions:"non-veg"
        },
        {
            name: "Salad",
            image: Salad,
            description:"Salad is a dish that typically consists of a mixture of fresh vegetables, fruits, or other ingredients that are served cold and often dressed with a dressing or sauce. Salads are often eaten as a side dish to a main meal, or as a light and refreshing meal on their own.",
            mealType:"dinner",
            dietaryRestrictions:"vegetarian"
        }
    ]
    return( 
    <div className="Main">
        <Header/>
        <div className="App">
        <RecipeList reciepe={recipe}/>
        </div>
    </div> ); 
}

export default App;