import Title from './../hooks/etc/Title';
import Container from 'react-bootstrap/Container';

const About = () => (
    <Container className="mt-3">
      <Title title="About" />
      <h1>About Authsome</h1>
      <p>
        Authsome is a free and open source identity service specifically designed for institution access-control.
      </p>
    </Container>
  );

export default About;