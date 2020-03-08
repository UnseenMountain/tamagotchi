import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Footer = () => {
    return ( 
        <Card className="text-center">

<Card.Footer>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     Project lead, character design and react by Will S
    </Card.Text>
    <Card.Text>
     UI UX and level design by Luke Klymshyn
    </Card.Text>
    <Card.Text>
    authorization, Mongo by Hyejin Kim  
    </Card.Text>
    <Card.Text>
    Mongod/connection, deployment  Preston Carrol 
    </Card.Text>
    <Button href="https://github.com/UnseenMountain/tamagotchi">Go somewhere</Button>
  </Card.Body>
  </Card.Footer>
</Card>
     );
}
 
export default Footer;