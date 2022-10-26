import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import TvShowReviews from "../tvShowReviews"

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: '0.2em',
    backgroundColor: "rgba(255,255,255,0.7)",
    color: 'white',
    borderRadius: '20px',
};

const detail = {
color: 'rgba(255,255,255,0.6)'
}
const chip = { margin: 0.5 };

const TvDetails = ({ tvShow }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
 

  return (
    <>
      <Typography sx={{...detail}} variant="h5" component="h3">
        Overview
      </Typography>

      <Typography sx={{...detail}} variant="h6" component="p">
        {tvShow.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
        <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>


      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${tvShow.runtime} min.`} />
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average} (${tvShow.vote_count}`}
        />
        <Chip label={`Released: ${tvShow.release_date}`} />
      </Paper>


      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Companies" sx={{...chip}} color="primary" />
        </li>
        {tvShow.production_companies.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvShowReviews tvShow={tvShow} />
      </Drawer>
      </>
  );
};
export default TvDetails ;