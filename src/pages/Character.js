import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { useStyles } from "../styles/jss/Character/CharacterJSS";
import { Box, Grid, Container } from "@material-ui/core";
import NotFound404 from "../components/Error/NotFound404";
import * as actions from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import CharacterCard from "../components/Character/CharacterCard";
import OriginSection from "../components/Character/OriginSection";
import CharInfoCard from "../components/Character/CharInfoCard";

const Character = React.memo(({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const char = useSelector((state) => state.character.character);
  const [charState, setCharState] = useState(0);

  const { id } = match.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.getSingleChar(id))
        .then((result) => setCharState(1))
        .catch((err) => {
          setCharState(2);
          console.log(err);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  const Char = () => {
    switch (charState) {
      case 0:
        return (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        );
      case 1:
        return (
          <Grid spacing={2} container className={classes.gridContainer}>
            <Grid item xs={12} md={6}>
              <CharacterCard char={char} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CharInfoCard char={char} />
            </Grid>
            <Grid item xs={12}>
              <OriginSection />
            </Grid>
          </Grid>
        );
      case 2:
        return <NotFound404 />;
      default:
        return "Should never make it here";
    }
  };

  return (
    <React.Fragment>
      <Box className={classes.charWrapper}>
        <Container disableGutters>{Char()}</Container>
      </Box>
    </React.Fragment>
  );
});

export default Character;
