import React from 'react';
import { Card, Button, Container, CardDeck, Image } from 'react-bootstrap';
import "./style.css"

const Menu = ({ children }) => {
    return (
        <div>
            {children}
        
            <Card className="bg-dark text-white">
  <Card.Img src="https://lh3.googleusercontent.com/proxy/-qxKpX2sWTZb63p8ebv4uydIGArmTa9j4Gr7RslucV3CLlcb9HvnSGbXRYCcdLchsiwn71b9ZdltZOyNvlNMfcO5I30OLD2tF-Top7QCK22Bpjswy0FxtJkcdPTmNRhVjZfc5Nec2cEsWG6UqeAP50_RpHrv8EsBdxFY" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>




{/* <CardDeck>
    
  <Card>
  <span className="space">
    <Card.Img variant="top" src="https://files.slack.com/files-pri/TNE2EA3EH-FUYGCT1JQ/tamagotchi-egg-green-prints.jpg" />
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
  
</CardDeck> */}
        </div>
    );
}

export default Menu;
