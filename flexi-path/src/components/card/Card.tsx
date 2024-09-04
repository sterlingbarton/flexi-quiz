import { Box, Typography } from '@mui/material';
import CardStyles from './CardStyles';

type CardProps = {
  orientation: 'square' | 'horizontal' | 'vertical';
  title?: string;
  body: string;
  emoji?: string;
  handleAnswerSelect: () => void;
  isSelected: boolean;
};

const Card = ({
  orientation,
  title,
  body,
  emoji,
  handleAnswerSelect,
  isSelected,
}: CardProps) => {
  const styles = CardStyles(orientation);
  return (
    <Box
      sx={{
        ...styles.cardContainer,
        ...(isSelected && { backgroundColor: '#ECECEC' }),
      }}
      onClick={handleAnswerSelect}
    >
      {emoji && <Box sx={styles.smileyImg} component="img" src={emoji} />}
      {title && <Typography sx={styles.title}>{title}</Typography>}
      <Typography sx={styles.body}>{body}</Typography>
    </Box>
  );
};

export default Card;
