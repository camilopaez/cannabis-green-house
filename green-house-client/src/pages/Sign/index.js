import React from "react";
import { Container, Row, Col } from "reactstrap";
import { InnerForm } from "components/Form";
import "./styles.css";

export const Sign = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="Sider" md={7} />
        <Col className="Sign" md={5}>
          <Row>
            <Col className="Logo" md={12}>
              Cannabis GreenHouse
            </Col>
            <Col>
              <InnerForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
