import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';


;

const Appbar = () => {
  return (
    <div>
      
   
    <Box sx={{ flexGrow: 1,backgroundColor: "grey" }} >
      <AppBar position="static" color='grey'>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          Company name
          </Typography>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Enterprise</Button>
          <Button color="inherit">Support</Button>
          <Button variant='outlined' >Login</Button>


        </Toolbar>
      </AppBar>
    </Box>
    
      
    </div>
  )
}

export default Appbar




{/* <Toolbar>
        
        <Typography variant="h6" color="inherit" >
          Company name
      
        </Typography>
        <Stack sx={{display :"flex", justifyContent:"flex-end", alignItems:"flex-end", direction:"row"}}>
        
        </Stack>
        
      </Toolbar> */}