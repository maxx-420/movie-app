import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import './MovieCard.scss';
import { memo } from "react";

function MovieCard({Poster, Title}: any) {
  return (
    <Card
    className="movie-card"
      sx={{
        width: 180,
        height: 280,
        display: "flex",
        flexDirection: "column",
        p: '10px',
        gap: '10px',
        boxSizing: 'border-box'
      }}
    >
      <CardActionArea disableRipple disableTouchRipple aria-describedby="card-title">
        <CardMedia
          component="img"
          height="190"
          src={Poster}
          alt="Movie Poster"
          className="movie-card__poster"
        />
        <CardContent sx={{
            py: 0,
            px: 0
        }}>
          <h5 className="body-3 movie-card__title bold-1" id="card-title" title={Title}>
            {Title}
          </h5>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          px: 0,
          py: 0,
          my: 0,
          marginTop: 'auto'
        }}
      >
        <IconButton
          className="movie-card__action-button"
          color="inherit"
          aria-label="play movie"
          sx={{
            p: 0
          }}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          className="movie-card__action-button"
          color="inherit"
          aria-label="add to playlist"
          sx={{
            p: 0
          }}
        >
          <AddCircleOutlineIcon fontSize="inherit"/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default memo(MovieCard);
