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
  alpha
} from '@mui/material';
import { 
  Download, 
  CheckCircle, 
  Schedule,
  Slideshow,
  PresentToAll
} from '@mui/icons-material';
import "../../css/home.css";

const presentations = [
  {
    id: 5,
    title: "Proposal Presentation",
    description: "Project proposal and initial concept presentation",
    downloadUrl: "https://drive.google.com/file/d/1AR_AWmwDwRF-jV7fpCpSYqrrQFswPakK/view?usp=sharing",
    status: "completed",
    type: "presentation"
  },
  {
    id: 6,
    title: "Progress Presentation 1",
    description: "First milestone progress review and updates",
    downloadUrl: "https://drive.google.com/file/d/1oHaMgdSIx6F3G9PbI5RS6aOkgebiRnw3/view?usp=sharing",
    status: "completed",
    type: "presentation"
  },
  {
    id: 7,
    title: "Progress Presentation 2",
    description: "Second milestone progress review and developments",
    downloadUrl: "https://drive.google.com/file/d/1t_shL-kUvm49C54wiAeJM8B9bQuPUBf3/view?usp=sharing",
    status: "completed",
    type: "presentation"
  },
  {
    id: 8,
    title: "Final Presentation",
    description: "Comprehensive final project presentation and demo",
    downloadUrl: "",
    status: "pending",
    type: "presentation"
  }
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

const Slides = () => {
  const theme = useTheme();
  
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: 6,
        minHeight: '100vh'
      }}
      className='homeContainer'
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
            border: `1px solid ${alpha('#064472', 0.3)}`
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
                justifyContent: 'center'
              }}
            >
              <Slideshow />
            </Box>
            <Box>
              <Typography 
                variant="h4" 
                component="h1" 
                sx={{ 
                  fontWeight: 700,
                  color: '#064472',
                  mb: 0.5
                }}
              >
                Presentations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Presentation slides and materials
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Presentations Grid */}
        <Grid container spacing={3}>
          {presentations.map((item, index) => (
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
                      transform: 'translateY(30px)'
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    }
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`
                  }
                }}
              >
                {/* Status Indicator */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1
                  }}
                >
                  <Chip
                    icon={getStatusIcon(item.status)}
                    label={item.status === 'completed' ? 'Done' : 'Pending'}
                    color={getStatusColor(item.status) as any}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'capitalize'
                    }}
                  />
                </Box>

                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  p: 3
                }}>
                  {/* Type Icon */}
                  <Box
                    sx={{
                      mb: 2,
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: alpha('#064472', 0.08),
                      color: '#064472',
                      alignSelf: 'flex-start'
                    }}
                  >
                    <PresentToAll />
                  </Box>

                  {/* Title */}
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      lineHeight: 1.3,
                      mb: 1.5
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
                      lineHeight: 1.6
                    }}
                  >
                    {item.description || 'No description available'}
                  </Typography>

                  {/* Download Button */}
                  <Button
                    variant={item.downloadUrl ? "contained" : "outlined"}
                    fullWidth
                    startIcon={<Download />}
                    onClick={() => item.downloadUrl && handleDownload(item.downloadUrl)}
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
                          : 'none'
                      },
                      '&:disabled': {
                        backgroundColor: alpha(theme.palette.action.disabled, 0.08),
                        color: theme.palette.action.disabled
                      }
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

export default Slides;