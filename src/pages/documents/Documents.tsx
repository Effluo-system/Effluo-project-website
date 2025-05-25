import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Paper,
  useTheme,
  alpha,
} from '@mui/material';

import {
  Download,
  Description,
  CheckCircle,
  Schedule,
  Article,
} from '@mui/icons-material';
import '../../css/home.css';

const documents = [
  {
    id: 1,
    title: 'Topic Assessment',
    description: 'Initial project assessment and topic selection documentation',
    downloadUrl:
      'https://drive.google.com/file/d/1awRwntaYucgXgl6Y9O4CLVswZDQ6GA8c/view?usp=sharing',
    status: 'completed',
    type: 'assessment',
  },
  {
    id: 2,
    title: 'Project Proposal',
    description:
      'Comprehensive project proposal with objectives and methodology',
    downloadUrl:
      'https://drive.google.com/file/d/1s83AFQXl26O-q2tB5HwNvKT9gLdz_WmT/view?usp=sharing',
    status: 'completed',
    type: 'proposal',
  },
  {
    id: 3,
    title: 'Research Paper',
    description: 'In-depth research findings and analysis documentation',
    downloadUrl:
      'https://drive.google.com/file/d/1nGN0STx3IejDpNCF9qB0t1qlwYMZCy0S/view?usp=sharing',
    status: 'completed',
    type: 'research',
  },
  {
    id: 4,
    title: 'Final Report',
    description: 'Complete project summary with results and conclusions',
    downloadUrl:
      'https://drive.google.com/file/d/1ar4q0ilYGHVCjTMZ5rWZYdakiNHrMopV/view?usp=sharing',
    status: 'completed',
    type: 'report',
  },
];

const handleDownload = (url: string) => {
  const fileId = url.match(/\/d\/(.+?)\//)?.[1];
  if (fileId) {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  } else {
    window.open(url, '_blank');
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'pending':
      return 'warning';
    default:
      return 'default';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle sx={{ fontSize: 16 }} />;
    case 'pending':
      return <Schedule sx={{ fontSize: 16 }} />;
    default:
      return <CheckCircle sx={{ fontSize: 16 }} />;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'research':
      return <Article />;
    default:
      return <Description />;
  }
};

const Documents = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        minHeight: '100vh',
        mt: 6,
      }}
      className="homeContainer"
    >
      <Box sx={{ mb: 6 }}>
        {/* Section Header */}
        <Paper
          elevation={2}
          sx={{
            backgroundColor: 'white',
            p: 3,
            mb: 4,
            borderRadius: 3,
            border: `1px solid ${alpha('#064472', 0.3)}`,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                backgroundColor: alpha('#064472', 0.1),
                color: '#064472',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Description />
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: '#064472',
                  mb: 0.5,
                }}
              >
                Documents
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Project documentation and reports
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Documents Grid */}
        <Grid container spacing={3}>
          {documents.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  backgroundColor: theme.palette.background.paper,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  '@keyframes slideInUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(30px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: `0 20px 40px ${alpha(
                      theme.palette.primary.main,
                      0.15
                    )}`,
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  },
                }}
              >
                {/* Status Indicator */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                  }}
                >
                  <Chip
                    icon={getStatusIcon(item.status)}
                    label={item.status === 'completed' ? 'Done' : 'Pending'}
                    color={getStatusColor(item.status) as any}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                  }}
                >
                  {/* Type Icon */}
                  <Box
                    sx={{
                      mb: 2,
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: alpha('#064472', 0.08),
                      color: '#064472',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {getTypeIcon(item.type)}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.3,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      flexGrow: 1,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description || 'No description available'}
                  </Typography>

                  {/* Download Button */}
                  <Button
                    variant={item.downloadUrl ? 'contained' : 'outlined'}
                    fullWidth
                    startIcon={<Download />}
                    onClick={() =>
                      item.downloadUrl && handleDownload(item.downloadUrl)
                    }
                    disabled={!item.downloadUrl}
                    sx={{
                      textTransform: 'none',
                      borderRadius: 2,
                      py: 1.2,
                      fontWeight: 600,
                      backgroundColor: item.downloadUrl
                        ? '#064472'
                        : 'transparent',
                      color: item.downloadUrl ? 'white' : '#064472',
                      '&:hover': {
                        backgroundColor: item.downloadUrl
                          ? '#053a62'
                          : alpha('#064472', 0.08),
                        transform: 'translateY(-2px)',
                        boxShadow: item.downloadUrl
                          ? `0 8px 20px ${alpha('#064472', 0.3)}`
                          : 'none',
                      },
                      '&:disabled': {
                        backgroundColor: alpha(
                          theme.palette.action.disabled,
                          0.08
                        ),
                        color: theme.palette.action.disabled,
                      },
                    }}
                  >
                    {item.downloadUrl ? 'Download' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Documents;
