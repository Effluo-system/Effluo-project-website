import { Container } from '@mui/material';
import AboutUsComponent from '../../components/AboutUs/aboutUsComponent';
import '../../css/home.css'; 

const AboutUs = () => {
  return (
    <Container className='homeContainer' sx={{ mt: 6 }}>
      <AboutUsComponent />
    </Container>
  );
};

export default AboutUs;
