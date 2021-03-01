import React from "react";
import "./card.css";
import TinderCard from 'react-tinder-card';


function Card({name,image}){

return(
<div className="cards">
<TinderCard preventSwipe={["up","down"]}>
<img src={image} alt="profile"/>
<h3>{name}</h3>
</TinderCard>
</div>
)


};

export default Card;