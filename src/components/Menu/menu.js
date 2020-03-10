import React from 'react';
import { Card, Button, CardDeck, ButtonGroup, ButtonToolbar, Col, Image, Container } from 'react-bootstrap';



const Menu = ({ children }) => {
    return (
        <div>
            {children}
        {/* src={process.env.PUBLIC_URL + '/yourPathHere.jpg'} */}
            
            
            
            
            
            <Card>
                <Card.Img src="https://wallpaperplay.com/walls/full/2/9/d/123834.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    



                    {/* Pet select screen
                    {/* <Container>
                    <CardDeck>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Please select a pet egg to start your adventure.
                                    <ButtonGroup size="lg" className="mb-2">
                                   
                                     <Button>Hatch</Button>
                                    
                                </ButtonGroup>
                                </Card.Text>
                            </Card.Body>
                           
                        </Card>

                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button><Col xs={6} md={4}>
                                    <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FUYGCT1JQ/tamagotchi-egg-green-prints.jpg" rounded />
                                </Col>
                                </Button>


                                <Button><Col xs={6} md={4}>
                                    <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FV16HRBP0/tamagotchi-egg-brown-prints.jpg" rounded />
                                </Col>
                                </Button>

                                <Button><Col xs={6} md={4}>
                                    <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FUNT0M7A5/tamagotchi-egg-pink-prints.jpg" rounded />
                                </Col>
                                </Button>

                                <ButtonGroup className="mr-2" aria-label="Second group">
                            <Button><Col xs={6} md={4}>
                                    <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FUMG0BU0K/tamagotchi-egg-purple-prints.jpg" rounded />
                                </Col>
                                </Button> 
                                <Button><Col xs={6} md={4}>
                                    <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FUNT0M7EV/tamagotchi-egg-blue-prints.jpg" rounded />
                                </Col>
                                </Button> 
                                <Button><Col xs={6} md={4}>
                                    <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FUYGCT1TN/tamagotchi-egg-red-prints.jpg" rounded />
                                </Col>
                                </Button>
                                
                            </ButtonGroup>
                            </ButtonGroup>
                            

                        
                        </ButtonToolbar>

                    </CardDeck>
</Container> */}




                    {/* Battle screen}
                    {/* <Card.Text>
      

 <CardDeck>
    
  <Card>
  <span className="space">
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Pet menu</Card.Title>
      <Card.Text>
        <li>
            <ul className="health">
                Health:
            </ul>
            <ul className="level">
                Level:
            </ul>
            <ul className="attack">
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

    </Card.Text> */}

                </Card.ImgOverlay>
            </Card>

        </div>
    );
}

export default Menu;
