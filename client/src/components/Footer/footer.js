import React from 'react';
import { Card } from 'react-bootstrap';
import "./style.css";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Footer>
        <Card.Body>
          <Card.Text className="footer-text">
            <i className="fas fa-check-double"/> Authorization, Deployment by Hyejin Kim
          </Card.Text>
          <Card.Text className="footer-text">
            <i className="fas fa-atom" /> UX/UI, React, Front-end design by Luke Klymshyn
          </Card.Text>
          <Card.Text className="footer-text">
            <i class="fas fa-gamepad" /> React, Phaser, Game Logic by Will Satcher
          </Card.Text>
          <Card.Text className="footer-text">
            <i class="fas fa-database" /> MongoDB, API by Preston Carroll
          </Card.Text>
          <Card.Title className="footer-text-sm">
            <i className="fa fa-cog fa-spin fa-fw text-white" /><strong> Made with React, Phaser, OKTA, Node/Express & Mongo </strong><i className="fa fa-cog fa-spin fa-fw text-white" />
          </Card.Title>
        </Card.Body>
      </Card.Footer>
    </Card>
  );
}

export default Footer;