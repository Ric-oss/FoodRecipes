import React from 'react'
import './Header.css'
const Header=(props)=>{
    
 return(
     
    <header className="header">
    
    <input type="text" value={props.value} onChange={props.getdata} className="input" />
    <button type="submit" onClick={props.submit} className="button">Search</button>
    
 </header>

 )
}
export default Header;