import  React from 'react'
import "./style.css"
import {Card} from 'react-bootstrap'





const MenuContainer = ({ children, style }) =>
<div className="menu" style={style}>
  {children}
    <h1>
        Save 1
    </h1>
  
</div>
    
    
    

export default MenuContainer;