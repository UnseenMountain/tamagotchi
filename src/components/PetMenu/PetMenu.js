import React, { useState } from 'react';
import { Container, Card, CardDeck, ButtonGroup, Button, ButtonToolbar, Col, Image } from 'react-bootstrap'

function PetMenu() {
    const [menu, setPetMenu] = useState({ selectedPet: null });
    console.log(menu)
    return (
        <div>
            <button onClick={() => {
                setPetMenu({ selectedPet: 'pet 1' });

            }}>
                SET MY STATE with PET 1
        </button>

            <button onClick={() => {
                setPetMenu({ selectedPet: 'pet 2' });

            }}>
                SET MY STATE with PET 2
        </button>

            <button onClick={() => {
                setPetMenu({ selectedPet: 'pet 3' });

            }}>
                SET MY STATE with PET 3
        </button>

            <button onClick={() => {
                setPetMenu({ selectedPet: 'pet 4' });

            }}>
                SET MY STATE with PET 4
        </button>






            <Card>
                <Card.Img src="https://wallpaperplay.com/walls/full/2/9/d/123834.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    
                    {/* <Container>
                        <CardDeck>
                            <Card>

                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        <h1>
                                            Please select a pet egg to start your adventure.
                                </h1>
                                        <Button variant="secondary">Hatch</Button>
                                        <ButtonGroup size="lg" className="mb-2">




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
                                                        <Button><Col xs={6} md={4}>
                                                            <Image height="100" width="100" src="https://files.slack.com/files-pri/TNE2EA3EH-FUYGCT1TN/tamagotchi-egg-red-prints.jpg" rounded />
                                                        </Col>
                                                        </Button>

                                                    </ButtonGroup>
                                                </ButtonGroup>



                                            </ButtonToolbar>

                                        </ButtonGroup>
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                    </Container> */}
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default PetMenu




// const Menu = ({ children }) => {

//                    