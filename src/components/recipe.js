import React from 'react';

function recipe(props){
    return(
        <div className="rcontain">
        <h1>{props.title}</h1>
        <img src={props.image} alt=""/>
     <ol>
         {props.ingredients.map(ingredient=>(
             <li>{ingredient.text}</li>
         ))

         }
     </ol>
     <p>{props.calories}</p>

     
        </div>
        
    )
}
export default recipe;