import { Divider, Stack, Typography } from '@mui/material';
import useCustomStyles from './useStyles';
import { data } from '../data/domain';
import ObjectiveImg from '../../../assets/objective.avif';

const Objectives = () => {
  const objectives = data['objectives'];
  const { TableViewSX } = useCustomStyles();
  return (
    <Stack sx={[TableViewSX.container, { pb: 0 }]}>
      <Typography
        variant="h2"
        sx={{ color: '#0e5386', textAlign: 'center' }}
        mb={2}
      >
        Research Objectives
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="center"
        gap={2}
      >
        <Stack sx={{ ml: -2, mt: { xs: 0, md: -8 } }}>
          <img src={ObjectiveImg} alt="problem" width={1000} />
        </Stack>
        <Stack>
          <Stack my={2} spacing={2}>
            {objectives.map((para, index) => (
              <Stack key={index} my={2} spacing={2} direction="row">
                <Typography>⦿ </Typography>
                <Typography variant="h4" sx={{ textAlign: 'justify' }}>
                  {`${para}`}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Objectives;
