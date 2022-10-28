import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistTagIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/no-image-available.png'
import { Link } from "react-router-dom";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WorkIcon from '@mui/icons-material/Work';
export default function MovieCreditsCard({credit}) {
  return (
    
    <Card sx={{ maxWidth: 345, backgroundImage: "url('https://wallpaperboat.com/wp-content/uploads/2019/10/high-resolution-black-background-06.jpg')" }} >
            <CardHeader
        title={
          <Typography sx={{color: 'white'}} variant="h6" component="p">
            {credit.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
            credit.profile_path
            ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
            : img
        }
      />
      <CardContent sx={{color: 'white'}}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h6" component="p">
              <WorkIcon fontSize="small" />
              {" "}{credit.known_for_department}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <EmojiEmotionsIcon fontSize="small" />
              {"  "} {credit.character}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {credit.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}