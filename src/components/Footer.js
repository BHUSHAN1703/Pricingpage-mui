import React from 'react'
import { Stack, Typography,Box } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer' direction='row'>
      <Box sx={{ mx: 90, m: 10 }} color =  'black'>
      <Stack direction="row" sx={{ mx: 80, m: 10 }} justifyContent="row" alignItems="right" spacing={{ xs: 4, sm: 10, md: 10,xl:30}}>
        <item1 direction="column" justifyContent="center" alignItems="right">
          <Typography variant='h6'>Company</Typography>
          <Typography variant='body1' color='gray'>Team</Typography>
          <Typography variant='body1' color='gray'>History</Typography>
          <Typography variant='body1' color='gray'>Contact us</Typography>
          <Typography variant='body1' color='gray'>Locations</Typography>
        </item1>


        
          <item direction="column" justifyContent="center" alignItems="center">
            <Typography variant='h6'>Features</Typography>
            <Typography variant='body1' color='gray'>Cool stuff</Typography>
            <Typography variant='body1' color='gray'>Random feature</Typography>
            <Typography variant='body1' color='gray'>Team feature</Typography>
            <Typography variant='body1' color='gray'>Developer stuff</Typography>
            <Typography variant='body1' color='gray'>Another one</Typography>

          </item>
       
          <item direction="column" justifyContent="center" alignItems="center">
            <Typography variant='h6'>Resources</Typography>
            <Typography variant='body1' color='gray'>Resource</Typography>
            <Typography variant='body1' color='gray'>Resource name</Typography>
            <Typography variant='body1' color='gray'>Another resource</Typography>
            <Typography variant='body1' color='gray'>Final resource</Typography>

          </item>
        
          <item direction="column" justifyContent="center" alignItems="center">
            <Typography variant='h6'>Legal</Typography>
            <Typography variant='body1' color='gray'>Privacy policy</Typography>
            <Typography variant='body1' color='gray'>Terms of use</Typography>

          </item>
       
      </Stack>
    </Box><div>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'rgb(247, 245, 245)', mt: 0, '& > :not(style)': { m: 4 }, }}>
          <Typography variant='body2' color='gray'>Built with ❤️ by the Material-UI team.</Typography>
        </Stack>
      </div>
    </div>
  )}
  


export default Footer


