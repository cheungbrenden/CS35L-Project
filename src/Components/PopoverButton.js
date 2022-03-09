import React from 'react'
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const studyTheme = createTheme({
  palette: {
    generic: {
      main: '#594A47',
      contrastText: '#fff',
    },
    baseline: {
      main: '#FFFFFF',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Solway',
    color: '#000000',
  },
});
    export default function MouseOverPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
       <ThemeProvider theme={studyTheme}>
       <Button
      style={{maxWidth: '690px', maxHeight: '75px', minWidth: '690px', minHeight: '75px'}}
       sx={{
        color: 'black',
      }}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={props.handleClick}
        variant="contained"
        color="baseline"
      >
          {props.children}
      </Button>
       </ThemeProvider>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{props.label}</Typography>
      </Popover>
    </div>
  ); }