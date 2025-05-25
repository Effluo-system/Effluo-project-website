import { Container } from '@mui/material';
import '../../css/home.css';
import ContactUsComponent from '../../components/ContactUs/contactUsComponent';


const ContactUs = () => {
  return (
    <Container className='homeContainer'>
      <ContactUsComponent/>
    </Container>
  );
};

export default ContactUs;
