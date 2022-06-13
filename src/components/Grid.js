import React from 'react'
import { Box} from '@mui/system';
import {CardContent,Card,Typography,Button, Stack } from '@mui/material';
import { CardActions } from '@mui/material';
const credentials=[
  {id:1,title:"Free",heading:"$0/pm",description1:"10 users included",description2:"2 GB of storage",description3: "Help center access",description4:" Email   support  ",view:"Sign up for free"},
  {id:2,title:"Pro",heading:"$10/pm",description1:"20 users included" ,description2:"20 GB of storage",description3: "Help center access",description4:"  Priority  email  support ",view:"   Get   Started   "},
  {id:3,title:"Enterprise",heading:"$30/pm",description1:"30 users included ",description2:"200  GB  of storage",description3: "Help  center  access",description4:"Phone & email support",view:"contact us"},
 
]

const Cards = () => {
  return (
    <div className='card'>
    <Box  sx={{ display: 'flex',direction: 'row', maxWidth:1000 , flexWrap: 'wrap',backgroundColor:  'rgb(247, 245, 245)',justifyContent:'space-between',mx:'auto','& > :not(style)': {m:5},}}>
    {
      credentials.map((info)=>(
        <Stack display='flex' direction='row' justifyContent='space-between' >
     <Card key={info.id} sx={{width: 250,maxHeight:370}} >
     <Box sx={{backgroundColor:'lightgrey',height:70, display:'flex',alignItems:'center',justifyContent:'center'}}>
    <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     
      <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center',justifyContent:'center', alignItems: 'center', color:'black',fontWeight:500}}>
        {info.title}
      </Typography>
      </CardContent>
    </Box>
    <Typography variant='h5' sx={{m:2, textAlign:'center',justifyContent:'center', alignItems: 'center',}}>{info.heading}</Typography>
    <Typography variant='body2' sx={{m:2, textAlign:'center',justifyContent:'center', alignItems: 'center',}}>{info.description1}</Typography>
    <Typography variant='body2' sx={{m:2, textAlign:'center',justifyContent:'center', alignItems: 'center',}}>{info.description2}</Typography>
    <Typography variant='body2' sx={{m:2, textAlign:'center',justifyContent:'center', alignItems: 'center',}}>{info.description3}</Typography>
    <Typography variant='body2' sx={{m:2, textAlign:'center',justifyContent:'center', alignItems: 'center',}}>{info.description4}</Typography>
    <CardActions sx={{textAlign:'center',justifyContent:'center', alignItems: 'center', color:'black',fontWeight:500}}>
      <Button variant='outlined' size=" extra large" textAlign = 'centre'>{info.view}</Button>
      
    </CardActions>
  </Card>
   
   
   
     
     
     </Stack>
      ))
    }
     
  </Box>
    </div>
  )
}

export default Cards