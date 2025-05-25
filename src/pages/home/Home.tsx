import { Container } from '@mui/material';
import HomeComponent from '../../components/Home/HomeComponent';
import '../../css/home.css'


const Home = () => {
  return (
    <Container className = 'homeContainer'>

      <HomeComponent/>
  
    </Container>
  );
};

export default Home;
