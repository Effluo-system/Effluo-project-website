import { Container, Stack } from '@mui/material';
import HomeComponent from '../../components/Home/HomeComponent';
import '../../css/home.css';

const Home = () => {
  return (
    <Stack pb={6}>
      <Container className="homeContainer" sx={{ mt: 6 }}>
        <HomeComponent />
      </Container>
    </Stack>
  );
};

export default Home;
