import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Button } from 'reactstrap'
import { Input, Col } from './styles'

export const Form = () => {
  const history = useHistory()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    history.push('/dashboard')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <Input
              type='text'
              placeholder='Enter Username'
              value={user}
              onChange={e => {
                setUser(e.target.value)
              }}
            />
          </Col>
          <Col md={12}>
            <Input
              type='password'
              placeholder='Enter Password'
              value={pwd}
              onChange={e => {
                setPwd(e.target.value)
              }}
            />
          </Col>
          <Col>
            <Button color='success' size='md' block type='submit'>
              SignIn
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}
