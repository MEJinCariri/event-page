// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} MEJ in Cariri. Todos os direitos reservados.</p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <a href="/privacy" className="text-white">Política de Privacidade</a> | 
            <a href="/terms" className="text-white ml-2">Termos de Serviço</a>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
}

export default Footer;
