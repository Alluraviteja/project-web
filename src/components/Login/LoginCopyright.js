import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function LoginFooter(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#!" target="_blank">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default LoginFooter