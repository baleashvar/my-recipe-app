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
            <code>
                {
                    `import React, { useState } from 'react';

                    function App() {
                      const [agenda, setAgenda] = useState([
                        {
                          title: "Angular",
                          description: "Some description about the angular",
                          topics: ["Introduction", "Typescript", "Why Angular?", "Understanding Versions", "Fundamentals"]
                        },
                        {
                          title: "Vue",
                          description: "Some description about the vue",
                          topics: ["Introduction", "Javascript", "Why Vue?", "Vue Bindings", "Component Interaction"]
                        },
                      ]);
                      const [inputs, setInputs] = useState({ newTitle: '', newDescription: '', newTopic: '' });
                      const [topics, setTopics] = useState([]);
                    
                      const [titleIsValid, setTitleIsValid] = useState(true);
                      const [descriptionIsValid, setDescriptionIsValid] = useState(true);
                      const [topicIsValid, setTopicIsValid] = useState(true);
                    
                      const [submitAgenda, setSubmitAgenda] = useState(false);
                      const [addTopic, setAddTopic] = useState(false);
                    
                      const [togView, setTogView] = useState(false);
                    
                      const toggleView = () => {
                        setTogView(!togView);
                      };
                    
                      const handleChange = (input, e) => {
                        const value = e.target.value;
                        setInputs(prevInputs => ({ ...prevInputs, [input]: value }));
                    
                        setTitleIsValid(!(input === "newTitle" && value.trim().length === 0));
                        setDescriptionIsValid(!(input === "newDescription" && value.trim().length === 0));
                        setTopicIsValid(!(input === "newTopic" && value.trim().length === 0));
                    
                        if (input === "newTopic" && value.trim().length > 0) {
                          setAddTopic(true);
                        } else {
                          setAddTopic(false);
                        }
                    
                        if (descriptionIsValid && titleIsValid && topics.length > 0) {
                          setSubmitAgenda(true);
                        } else {
                          setSubmitAgenda(false);
                        }
                      };
                    
                      const addTopicHandler = (e) => {
                        e.preventDefault();
                        setTopics(prevTopics => [...prevTopics, inputs["newTopic"]]);
                        setInputs(prevInputs => ({ ...prevInputs, newTopic: '' }));
                        setAddTopic(false);
                        setSubmitAgenda(descriptionIsValid || titleIsValid || topics.length > 0);
                      };
                    
                      const submitTopicHandler = (e) => {
                        e.preventDefault();
                        setAgenda(prevAgenda => [...prevAgenda, {
                          title: inputs["newTitle"],
                          description: inputs["newDescription"],
                          topics: topics
                        }]);
                        setTopics([]);
                        setInputs({ newDescription: '', newTitle: '', newTopic: '' });
                        setSubmitAgenda(false);
                      };
                    
                      return (
                        <div>
                          <h1 className="mx-5 mb-5">Agenda Manager</h1>
                          {!togView && (
                            <div className="container" role="addAgenda">
                              <button className="btn btn-info" role="goToView" onClick={toggleView}>Click To View Agenda</button>
                              <form>
                                <div className="my-3">
                                  <label className="form-label">Title</label>
                                  <input type="text" name="newTitle" placeholder="Enter the title" className="form-control" role="inputTitle"
                                    onChange={(e) => handleChange("newTitle", e)}
                                    value={inputs["newTitle"]}
                                  />
                                  <small className="text-danger" data-testid="invalidTitle">
                                    {!titleIsValid && 'Title is required'}
                                  </small>
                                </div>
                                <div className="my-3">
                                  <label className="form-label">Description</label>
                                  <input type="text" name="newDescription" placeholder="Enter the description" className="form-control" role="inputDescription"
                                    onChange={(e) => handleChange("newDescription", e)}
                                    value={inputs["newDescription"]}
                                  />
                                  <small className="text-danger" data-testid="invalidDescription">
                                    {!descriptionIsValid && 'Description is required'}
                                  </small>
                                </div>
                                <div className="my-3 w-50">
                                  <label className="form-label">Enter topic</label>
                                  <input type="text" name="newTopic" placeholder="Enter the topic" className="form-control" role="inputTopic"
                                    onChange={(e) => handleChange("newTopic", e)}
                                    value={inputs["newTopic"]}
                                  />
                                  <small className="text-danger" data-testid="invalidTopic">
                                    {!topicIsValid && 'Topic is required'}
                                  </small>
                                </div>
                                <button className="btn btn-success addAlign" role="addTopicBtn" disabled={!addTopic} onClick={addTopicHandler}>+ Add Topic</button>
                                <button className="btn btn-success submitAlign" role="submitAgendaBtn" disabled={!submitAgenda} onClick={submitTopicHandler}>Submit Agenda</button>
                              </form>
                              {topics.length === 0 ? (
                                <div className="text-danger ml-2 mt-5" data-testid="noTopicsMsg">No Topics Added</div>
                              ) : (
                                <div className="card my-3">
                                  <div className="card-header">Added Topics</div>
                                  <div className="card-body">
                                    <ul className="list-group">
                                      {topics.map((topic, index) => <li key={index} className="list-group-item" role="topicList">{topic}</li>)}
                                    </ul>
                                  </div>
                                  <div className="card-footer">Refer the topics you added</div>
                                </div>
                              )}
                            </div>
                          )}
                          {togView && (
                            <div className="container" role="viewAgenda">
                              <button className="btn btn-info" role="goToAdd" onClick={toggleView}>Click To Add Agenda</button>
                              {agenda.length > 0 ? (
                                agenda.map((ag, index) => (
                                  <div className="card my-3" role="cards" key={index}>
                                    <div className="card-header">{ag.title}</div>
                                    <div className="card-body">
                                      <ul className="list-group">
                                        {ag.topics.map((topic, index) => <li key={index} className="list-group-item" role="topicList">{topic}</li>)}
                                      </ul>
                                    </div>
                                    <div className="card-footer">{ag.description}</div>
                                  </div>
                                ))
                              ) : (
                                <div className="card my-3" role="cards">
                                  <div className="card-header"></div>
                                  <div className="card-body">
                                    <ul className="list-group">
                                      <li className="list-group-item"></li>
                                    </ul>
                                  </div>
                                  <div className="card-footer"></div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    }
                    
                    export default App;
                    `
                }
            </code>
        </div>
    </div> ); 
}

export default App;