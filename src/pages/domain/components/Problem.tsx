import { Divider, Stack, Typography } from '@mui/material';
import useCustomStyles from './useStyles';
import { data } from '../data/domain';
import ProblemImg from '../../../assets/problem.png';

const Problem = () => {
  const problem = data['research-problem'];
  const { TableViewSX } = useCustomStyles();
  return (
    <Stack sx={TableViewSX.container}>
      <Typography
        variant="h2"
        sx={{ color: '#0e5386', textAlign: 'center' }}
        mb={2}
      >
        Research Problem
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row-reverse' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="center"
        gap={2}
      >
        <Stack>
          <img src={ProblemImg} alt="problem" width={4000} />
        </Stack>
        <Stack>
          <Stack my={2} spacing={2}>
            <Typography variant="h4" sx={{ textAlign: 'justify' }}>
              {problem.p1}
            </Typography>

            {problem.bullets.map((para, index) => (
              <Typography
                key={index}
                variant="h4"
                sx={{ textAlign: 'justify' }}
              >
                {`⦿ ${para}`}
              </Typography>
            ))}

            <Typography variant="h4" sx={{ textAlign: 'justify' }}>
              {problem.p2}
            </Typography>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Problem;
