import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Form } from 'components/Form'
import { LogCol, Sider, Logo } from './styles'

export const SignIn = () => {
  return (
    <Container fluid>
      <Row>
        <Sider md={7} />
        <LogCol md={5}>
          <Row>
            <Logo md={12}>Cannabis GreenHouse</Logo>
            <Col>
              <Form />
            </Col>
          </Row>
        </LogCol>
      </Row>
    </Container>
  )
}
