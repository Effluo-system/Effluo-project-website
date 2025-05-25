import { Container, Stack } from '@mui/material';
import TableView from './components/TableView';
import { data } from './data/domain';
import LiteratureImage from '../../assets/literature.webp';
import ResearchGap from './components/ResearchGap';

const Domain = () => {
  const literature = data['background-literature'];

  return (
    <Container>
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
      </Stack>
    </Container>
  );
};

export default Domain;
