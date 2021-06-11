import React from 'react';
import './Popup.css'
const Popup=(props)=>{
 return(
     <div  className="popup">
      <div className="popup--close" onClick={props.closePops}>Close</div>
      
       <h2>{props.title}</h2>
       <h4><span>Calories:</span> {props.calories}</h4>
       <ol>
         {props.ingredients.map((ingredient,i)=>(
             <li key={i} style={{color:"black"}}>{ingredient.text}</li>
         ))

         }
     </ol>
     </div>
    
 )
}
export default Popup