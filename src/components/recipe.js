import React,{useState} from 'react';
import Popup  from './Popup.js';
import './Recipe.css'
function Recipe(props){
  
    const[popup,setPopup]=useState(false);
     
    const click=()=>{
        setPopup(true);
    }
   const closePops=()=>{
    setPopup(false)
   }

    return(
        <div>

          <div style={{backgroundImage: `url(${props.image})`,backgroundSize:"cover",backgroundPosition: "center"}} className="rcontain" onClick={click}></div>
                    {/* <button type="button" onClick={click} className="button">Recipe</button>*/}
             
             {popup?<Popup title={props.title} ingredients ={props.ingredients} calories={props.calories} closePops={closePops}/>:""}
     
        </div>
        
    )
}
export default Recipe;