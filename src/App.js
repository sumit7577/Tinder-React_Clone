import './App.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import Footer from "./footer";
import React,{useState,useEffect} from "react";
import Card from "./card";
import axios from "./axios";

function App() {
const [card,setCard] = useState([])

useEffect(()=>{
async function data(){
const resp = await axios.get("data/user");
setCard(resp.data)
console.log(card)
}
data()
},[]);
  return (
    <div className="mainBody">
    
    <div className="header">
    <IconButton>
    <PersonIcon fontSize="large"/>
    </IconButton>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTcqrcsYCtX5UVyWXqyGOpBCyskmoXnYiiQ&usqp=CAU" alt="tinder" />
    <IconButton>
    <ForumIcon fontSize="large"/>
    </IconButton>
    </div>
    
    {card?.map(item=>(<Card name={item.name}
        image={item.image} />))}
    
    <Footer />
    </div>
    
)
};

export default App;
