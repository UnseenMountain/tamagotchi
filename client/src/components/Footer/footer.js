import React from 'react';
import { Card } from 'react-bootstrap';
const Footer = () => {
  return (
    <Card className="text-center">

      <Card.Footer>

        <Card.Body>

          <Card.Title></Card.Title>
          <Card.Text>
            Project lead, character design and react by Will Satcher
    </Card.Text>
          <Card.Text>
            UI UX and level design by Luke Klymshyn
    </Card.Text>
          <Card.Text>
            authorization, Mongo by Hyejin Kim
    </Card.Text>
          <Card.Text>
            Mongod/connection, deployment by Preston Carrol
    </Card.Text>

        </Card.Body>
      </Card.Footer>
    </Card>
  );
}

export default Footer;