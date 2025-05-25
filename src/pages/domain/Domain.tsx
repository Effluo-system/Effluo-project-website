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
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Domain = () => {
  const literature = data['background-literature'];
  const methodology = data['methodology'];

  return (
    <Stack pb={6}>
      <Container sx={{ mt: 6 }}>
        <Stack spacing={5}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <TableView
              title={literature.title}
              desc={literature.desc}
              image={
                <img
                  src={LiteratureImage}
                  alt="literature image"
                  width={1500}
                />
              }
              references={literature.ref}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ResearchGap />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Problem />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Objectives />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Technologies />
          </motion.div>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Domain;
