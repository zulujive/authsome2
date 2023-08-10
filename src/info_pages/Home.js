import Title from './../hooks/etc/Title';
import Container from 'react-bootstrap/Container';

const Home = () => (
    <Container className="mt-3">
      <Title title="Home" />
      <h1>Welcome to Authsome</h1>
      <p>
        Authsome is an OAuth2 identity server that provides secure login access to individuals within a specific email domain.
        Our platform ensures that only authorized users with the right credentials can access your resources.
      </p>
    </Container>
  );

export default Home;