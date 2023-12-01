import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cinema1 from '../../assetes/images/cinema1.jpg';
import { IMovie, IMovieDTO } from '../../types/movie';

export default function MovieCard({title,year,imageUrl,description}:IMovieDTO) {
  return (
    <Card sx={{ height:'100%' }}>
      <CardMedia
        sx={{ height: 340 }}
        // image={cinema1}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year:{year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

