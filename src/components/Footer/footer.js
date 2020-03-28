import React from 'react';
import { Card } from 'react-bootstrap';
const Footer = () => {
  return (
    <Card className="text-center">

      <Card.Footer>

        <Card.Body>

          <Card.Title></Card.Title>
          <Card.Text>
            Phaser, ion-Phaser by Will Satcher
    </Card.Text>
          <Card.Text>
            UI UX, Front-end design by Luke Klymshyn
    </Card.Text>
          <Card.Text>
            Authorization, Deployment by Hyejin Kim
    </Card.Text>
          <Card.Text>
            MongoDB, Back-end by Preston Carroll
    </Card.Text>

        </Card.Body>
      </Card.Footer>
    </Card>
  );
}

export default Footer;