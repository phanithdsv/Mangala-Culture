import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => (
  <div id="about">
    <h2>About Mangala Culture</h2>
    <p>At Mangala Culture, we are rooted in regenerative agrarian practices to promote a culture of peace and harmony. Our mission is to create an empowering and enlivening experience that we can share with our friends and patrons through  recreational spaces, wellness tours, and performing arts & culture.</p>
    <h3>Our principles</h3>
    <Container>
      <Row>
        <Col><h3>Regenerative Agrarian Practices</h3><p>Promoting sustainable farming methods that restore the health of the land and foster a harmonious relationship between humans and nature.</p><p>At Mangala Culture, we pride ourselves on our commitment to sustainability. We prioritize regenerative agrarian practices and work tirelessly to promote a culture of peace and harmony. By implementing eco-friendly methods, we aim to create a positive impact on the environment and inspire others to do the same.</p></Col>
        <Col><h3>Empowering and Enlivening Experiences</h3><p>Creating an atmosphere that empowers individuals and enlivens their spirits through engaging performances, cultural activities, and wellness tours.</p></Col>
        <Col><h3>Recreational Spaces for Joyful Connections</h3><p>Designing recreational spaces that encourage joyful connections, where people can come together to relax, rejuvenate, and foster a sense of community.</p></Col>
      </Row>
    </Container>
    <h3>Our Inspiration</h3>
    <p>T.D Singh</p>

  </div>
);

export default About;
