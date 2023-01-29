import { LinearProgress } from "@mui/material";
import "./DetailCard.scss";

import StyledButton from "../../atoms/button/Button";
import { Stack } from "@mui/system";

export function DetailCard({
  Poster,
  Title,
  Year,
  Runtime,
  Director,
  Language,
  Plot,
  imdbRating,
  isMobile,
}: any) {
  return (
    <div className="detail-card">
      {!isMobile && (
        <img src={Poster} alt="Movie Poster" className="detail-card__poster" />
      )}
      <div className="detail-card__info">
        <h4 aria-live="polite" className="bold-1 title-1">
          {Title}
        </h4>

        <span
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={isNaN(imdbRating) ? 0 : imdbRating * 10}
            className="detail-card__rating-bar"
            sx={{
              height: 10,
              borderRadius: 5,
              width: 200,
            }}
          />
          <p className="body-2 bold-2 detail-card__rating-text">
            {isNaN(imdbRating) ? "N/A" : imdbRating + "/" + "10"}
          </p>
        </span>

        <div style={{width: '100%'}}>
          <span className="info-lines body-4 light-1">
            <p>Year:</p>
            <p>{Year}</p>
          </span>
          <span className="info-lines body-4 light-1">
            <p>Running Time:</p>
            <p>{Runtime}</p>
          </span>
          <span className="info-lines body-4 light-1">
            <p>Directed By:</p>
            <p>{Director}</p>
          </span>
          <span className="info-lines body-4 light-1">
            <p>Language:</p>
            <p>{Language}</p>
          </span>
        </div>

        <p className="detail-card__desc body-5">{Plot}</p>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginTop: "auto",
          }}
        >
          <StyledButton>Play Movie</StyledButton>
          <StyledButton variant="outlined">Watch Trailer</StyledButton>
        </Stack>
      </div>
    </div>
  );
}
