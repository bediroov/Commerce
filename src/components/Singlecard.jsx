import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

const Singlecard = ({ id, url, name }) => {
  console.log(name);
  return (
    <>
      <Card className='card ' >
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name.slice(0, 10)}</Card.Title>

          <Button variant="primary">{id}</Button>
        </Card.Body>
      </Card>

    </>

  )


}



export default Singlecard