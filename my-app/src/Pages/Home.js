import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Carousel, Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox />
      <Container>
        <h2 className='text-center m-4'>Our Team</h2>
        <CardDeck className='m-4'>
          <Card>
            <Card.Img 
              variant='top'
              src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnes enim iucundum motum, quo sensus hilaretur. Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur.
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img 
              variant='top'
              src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnes enim iucundum motum, quo sensus hilaretur. Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur.
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img 
              variant='top'
              src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnes enim iucundum motum, quo sensus hilaretur. Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur.
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>

        </CardDeck>
      </Container>
      </>
    )
  }
}

