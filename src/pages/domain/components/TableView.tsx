import {
  Accordion,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import type { TableViewProps } from '../../../types/domain';
import useCustomStyles from './useStyles';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TableView = ({
  desc,
  title,
  flip,
  image,
  references,
  imgInAccordion,
}: TableViewProps) => {
  const { TableViewSX } = useCustomStyles();
  return (
    <Stack sx={TableViewSX.container}>
      <Typography variant="h2" sx={{ color: '#0e5386', textAlign: 'center' }}>
        {title}
      </Typography>
      {imgInAccordion && image}
      <Stack
        direction={{ xs: 'column', md: flip ? 'row-reverse' : 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="center"
        gap={2}
      >
        {!imgInAccordion && <Stack>{image}</Stack>}
        <Stack>
          <Stack my={3} spacing={2}>
            {desc.map((para, index) => (
              <Typography
                key={index}
                variant="h4"
                sx={{ textAlign: 'justify' }}
              >
                {para}
              </Typography>
            ))}
          </Stack>
          <Divider />
          {references && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5">References</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  {references.map((ref, i) => (
                    <Typography
                      key={i}
                      variant="pSmall"
                      sx={{ textAlign: 'justify' }}
                    >
                      {ref}
                    </Typography>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TableView;
