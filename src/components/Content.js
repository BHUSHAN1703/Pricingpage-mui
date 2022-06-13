import React from 'react'
import {  Typography,Box } from '@mui/material'
import Stack from '@mui/material/Stack';


const Content = () => {
  return (
    <div className='mainContent'>
    <Box sx={{mt:8}}>
<Stack direction="column" justifyContent="center" alignItems="center" spacing={2} >
<Typography variant='h2' sx={{textAlign:"center"}}>Pricing</Typography>
 <Typography variant='h6' sx={{mt:8,textAlign:"center",width:'35%',color:'gray'}}>Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</Typography>
 
 </Stack>

</Box>
<Box sx={{mt:5}}>

</Box>

     
        
    </div> 
    
  )
}

export default Content