import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Box, Typography } from "@material-ui/core";
import CharacterList from "../components/Character/CharacterList";
import Header from "../components/layout/Header";
import { useStyles } from "../styles/jss/Home/HomeJSS";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/index";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [noChar, setNoChar] = useState(false);

  useEffect(() => {
    setisLoading(true);
    setNoChar(false);
    const timeout = setTimeout(() => {
      dispatch(actions.getAllChars(1))
        .then(() => {
          setisLoading(false);
        })
        .catch((err) => {
          setisLoading(false);
          setNoChar(true);
          console.log(err);
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  const handleNextPage = (event, page) => {
    setisLoading(true);
    setNoChar(false);
    setTimeout(() => {
      dispatch(actions.getAllChars(page))
        .then(() => {
          setisLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setisLoading(false);
          setNoChar(true);
        });
    }, 1000);
  };

  const handleSearch = (event) => {
    setisLoading(true);
    setNoChar(false);
    setTimeout(() => {
      dispatch(actions.searchName(event.target.value))
        .then(() => {
          setisLoading(false);
        })
        .catch((err) => {
          setNoChar(true);
          console.log(err);
        });
    }, 2000);
  };

  return (
    <React.Fragment>
      <div className={classes.headerBackground}>
        <Header handleSearch={handleSearch} />
      </div>
      <div className={classes.CharacterBackground}>
        {noChar ? (
          <Typography align="center" variant="h2">
            No Characters Found!
          </Typography>
        ) : (
          <CharacterList isLoading={isLoading} />
        )}
      </div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          className={classes.pagination}
          count={20}
          onChange={handleNextPage}
        />
      </Box>
    </React.Fragment>
  );
};

export default Home;
