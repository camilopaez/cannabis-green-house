import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Button } from 'reactstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import { Input, Col } from './styles'

const Form = props => {
  const history = useHistory()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [token, setToken] = useState(null)

  const data = {
    username: user,
    password: pwd
  }
  async function pushName() {
    const res = await axios.post('http://localhost:4200/login', data)
    setToken(res.data.token)
  }

  const handleSubmit = e => {
    e.preventDefault()
    pushName()
    if (token != null) {
      props.onSubmit(token)
      history.push('/dashboard')
    }
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
              Sign In
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: token => {
      dispatch({ type: 'REQUEST', payload: { token: token } })
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)
