import { Container } from '@mui/material';
import '../../css/home.css';
import ContactUsComponent from '../../components/ContactUs/contactUsComponent';


const ContactUs = () => {
  return (
    <Container className='homeContainer' sx={{ mt: 6 }}>
      <ContactUsComponent/>
    </Container>
  );
};

export default ContactUs;
