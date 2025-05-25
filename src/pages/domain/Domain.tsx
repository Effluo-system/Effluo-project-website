import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import TableView from './components/TableView';
import { data } from './data/domain';
import LiteratureImage from '../../assets/literature.png';
import ResearchGap from './components/ResearchGap';
import Problem from './components/Problem';
import Objectives from './components/Objectives';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SystemDiagram from '../../assets/System-Diagram.png';
import Technologies from './components/Technologies';

const Domain = () => {
  const literature = data['background-literature'];
  const methodology = data['methodology'];
  return (
    <Container sx={{ mt: 6 }}>
      <Stack spacing={5}>
        <TableView
          title={literature.title}
          desc={literature.desc}
          image={
            <img src={LiteratureImage} alt="literature image" width={1500} />
          }
          references={literature.ref}
        />
        <ResearchGap />
        <Problem />
        <Objectives />
        <TableView
          title={methodology.title}
          desc={methodology.desc}
          image={
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ justifyContent: 'center' }}
              >
                <Typography variant="h5">System Diagram</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <img
                  src={SystemDiagram}
                  alt="SystemDiagram image"
                  width={1500}
                />
              </AccordionDetails>
            </Accordion>
          }
          imgInAccordion
        />
        <Technologies />
      </Stack>
    </Container>
  );
};

export default Domain;
