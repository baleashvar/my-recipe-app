import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function Recipie({value}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={value.image} 
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {value.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {value.description}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default Recipie;