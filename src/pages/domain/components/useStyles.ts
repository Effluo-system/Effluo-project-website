import { useTheme } from '@mui/material';

const useCustomStyles = () => {
  const theme = useTheme();
  const TableViewSX = {
    container: {
      color: theme.palette.common.black,
      background: theme.palette.common.white,
      borderRadius: '5px',
      padding: theme.spacing(3, 5),
    },
  };
  return { TableViewSX };
};

export default useCustomStyles;
