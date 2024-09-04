import { Container, Typography } from '@mui/material';
import HalfwayMarkerStyles from './HalfwayMarkerStyles';

export default function HalfwayMarker() {
  const styles = HalfwayMarkerStyles();
  return (
    <Container sx={styles.halfContainer}>
      <Typography component="h1" sx={styles.halfHeader}>
        Half way There!
      </Typography>
      <Typography component="h2" sx={styles.halfText}>
        That was easy!
      </Typography>
      <Typography component="p" sx={styles.halfText}>
        You can save the progress for later or continue.
      </Typography>
    </Container>
  );
}
