import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VendorPortalBtnStyles from './VendorPortalBtnStyles';

export default function VendorPortalBtn() {
  const styles = VendorPortalBtnStyles();
  return (
    <Button variant="text" endIcon={<ArrowForwardIcon />} sx={styles.vendorBtn}>
      Vendor Portal
    </Button>
  );
}
