import { Stack, Typography } from '@mui/material';
import useCustomStyles from './useStyles';
import { data } from '../data/domain';

const Technologies = () => {
  const stack = data['stack'];
  const { TableViewSX } = useCustomStyles();
  return (
    <Stack sx={[TableViewSX.container]}>
      <Typography
        variant="h2"
        sx={{ color: '#0e5386', textAlign: 'center' }}
        mb={2}
      >
        Technologies Used
      </Typography>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent="center"
        gap={5}
        flexWrap={'wrap'}
      >
        {stack.map((tech, i) => (
          <Stack key={i} alignItems={'center'} justifyContent="center">
            <img src={tech.icon} alt={tech.name} width={50} />
            <Typography variant="h5">{tech.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Technologies;
