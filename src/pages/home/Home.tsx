import { Container } from '@mui/material';
import HomeComponent from '../../components/Home/HomeComponent';
import '../../css/home.css';

const Home = () => {
  return (
    <Container className="homeContainer" sx={{ mt: 6 }}>
      <HomeComponent />
    </Container>
  );
};

export default Home;
