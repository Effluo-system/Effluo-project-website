import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { data } from '../data/domain';
import useCustomStyles from './useStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const ResearchGap = () => {
  const gaps = data['research-gap'];
  const { TableViewSX } = useCustomStyles();

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Stack sx={TableViewSX.container}>
      <Typography
        variant="h2"
        mb={3}
        sx={{ color: '#0e5386', textAlign: 'center' }}
      >
        Research Gap
      </Typography>
      <Grid container spacing={2}>
        {gaps.map((gap, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Stack alignItems="center" mb={2}>
              {gap.icon}
            </Stack>
            <Accordion
              expanded={expanded}
              onChange={handleToggle}
              sx={{ boxShadow: 'none' }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ alignSelf: 'flex-start', mt: '4px' }} />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ alignItems: 'flex-start' }}
              >
                <Typography variant="h5">{gap.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="pSmall" sx={{ textAlign: 'justify' }}>
                  {gap.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ResearchGap;
