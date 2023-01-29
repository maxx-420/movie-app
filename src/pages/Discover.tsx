import React, { useContext, useEffect, useRef, useState } from "react";
import data from "../assets/json/data.json";
import { Drawer, Grid } from "@mui/material";
import MovieCard from "../components/organisms/movie-card/MovieCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DetailCard } from "../components/organisms/detail-card/DetailCard";
import { motion } from "framer-motion";
import { SearchContext } from "../App";

const GRID_CONFIG = {
  sm: 5,
  lg: 2,
  md: 3,
  xs: 10,
};

const cardContainerTransitions = {
  visible: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: .2,
      duration: .8
    },
  },
  hidden: {
    scaleY: 0,
  },
};

const cardTransitions = {
  visible: {
    opacity: 1,
    transition: {
      duration: .3
    }
  },
  hidden: {
    opacity: 0,
  },
};

export default function Discover(props: any) {
  const [openCard, setOpenCard] = useState<{
    movie: any;
    index: number;
  }>({
    movie: null,
    index: 0
  });
  const { query } = useContext(SearchContext);
  const [cardData, setCardData] = useState<any[]>([]);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const scrollToRef = useRef<any>();

  useEffect(() => {
    const movieList = data.filter((movie) => {
      return query ? movie.Title?.toLowerCase().includes(query) : true;
    });
    setCardData(movieList);
    if(openCard.movie && !movieList.find(movie=> movie.Title === openCard.movie.Title)){
      setOpenCard({
        movie: null,
        index: 0
      })
    }
  }, [query, openCard?.movie]);


  const cardClickHandler = (movie: any, index: number) => {
    setOpenCard({
      movie,
      index,
    });
  };

  // scroll into view when detail card opened in desktop
  setTimeout(() => {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 0);

  // detail card index calculation
  let columnCount: number;
  if (sm) {
    columnCount = GRID_CONFIG.sm;
  } else if (md) {
    columnCount = GRID_CONFIG.md;
  } else {
    columnCount = GRID_CONFIG.lg;
  }
  let detailCardIdx =
    Math.floor((openCard?.index ?? 0) / columnCount) * columnCount;


  // handle detail card close in mobile view
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenCard({
        movie: null,
        index: 0,
      });
    };


  // no result
  if(query && !cardData.length){
    return (
      <p style={{
        color: "var(--text-secondary)"
      }}>No result found for your search</p>
    )
  }

  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 3, md: 5 }}
        rowSpacing={6}
        columns={10}
      >
        {cardData.map((card, index) => {
          return (
            <React.Fragment key={card.Title}>
              {md && openCard?.movie && detailCardIdx === index && (
                <Grid item xs={10}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardContainerTransitions}
                    ref={scrollToRef}
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "var(--bg-3)"
                    }}
                  >
                    <motion.div
                      variants={cardTransitions}
                    >
                      <DetailCard {...openCard.movie} />
                    </motion.div>
                  </motion.div>
                </Grid>
              )}
              <Grid
                item
                lg={GRID_CONFIG.lg}
                sm={GRID_CONFIG.sm}
                md={GRID_CONFIG.md}
                xs={GRID_CONFIG.xs}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <div onClick={(_: any) => cardClickHandler(card, index)}>
                  <MovieCard {...card} />
                </div>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
      <Drawer
        anchor="bottom"
        open={!md && openCard?.movie}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onClose={toggleDrawer(false)}
      >
        <DetailCard {...openCard?.movie} isMobile="true" />
      </Drawer>
    </>
  );
}
