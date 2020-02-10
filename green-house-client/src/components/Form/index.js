import React from 'react'
import { Container, Row, Button } from 'reactstrap'
import { Input, Col } from './styles'

export const Form = () => {
  const handleSubmit = e => {}

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <Input />
          </Col>
          <Col md={12}>
            <Input />
          </Col>
          <Col>
            <Button color='success' size='md' block>
              SignIn
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}
