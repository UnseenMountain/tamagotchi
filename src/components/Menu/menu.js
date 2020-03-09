import React from 'react';
import { Card, Button, Container, CardDeck } from 'react-bootstrap';
import "./style.css"

const Menu = ({ children }) => {
    return (
        <div>
            {children}
        
            <Card>
  <Card.Img src="https://wallpaperplay.com/walls/full/2/9/d/123834.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
    <Card.Text>
      

    /* <CardDeck>
    
  <Card>
  <span className="space">
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Pet menu</Card.Title>
      <Card.Text>
        <li>
            <ul>
                Health:
            </ul>
            <ul>
                Level:
            </ul>
            <ul>
                Attack power:
            </ul>
            
        </li>
      </Card.Text>
    </Card.Body>
    <Button variant="secondary" size="sm" active>
    Hatch
  </Button>
    </span>
  </Card>
  
  
  
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Enemy menu</Card.Title>
      <Card.Text>
      <li>
            <ul>
                Health:
            </ul>
            <ul>
                Level:
            </ul>
            <ul>
                Attack power:
            </ul>
            
        </li>
      </Card.Text>
    </Card.Body>
  </Card>
  
</CardDeck> 

    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

        </div>
    );
}

export default Menu;
