import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Zoom from '@mui/material/Zoom';
import styles from './BaclToTop.module.scss';

function ScrollTop(props:any) {
  const {
    children, window,
  } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event:any) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth', block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={styles.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop(props:any) {
  return (
    <>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <ArrowUpwardIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
