import React from 'react'
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

export default function ButtonComponent(props){
    const myClass = `button ${props.type}`
    const myId = `button ${props.type}`
    return(
    <Button style={
        {maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px'}}
        variant="contained" className={myClass} 
        id={myId} onClick={props.handleClick}>{props.children}
        onMouseOver={props.handleMouseOver}
        </Button>
    )
    }
    /*export default function MouseOverPopover() {
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
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
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
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  ); */