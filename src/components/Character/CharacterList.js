import React from "react";
import CharacterCard from "../../components/Character/CharacterCard";
import { Grid, Box, Container, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const CharacterList = React.memo(({ isLoading }) => {
  const charData = useSelector((state) => state.character.characterList);

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        {isLoading ? (
          <Box
            style={{ height: "50vh" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress style={{ color: "white" }} />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {charData.map((result, index) => {
              return (
                <Grid item xs={12} s={6} md={4} lg={3} xl={2} key={index}>
                  <Box display="flex" justifyContent="center">
                    <CharacterCard char={result} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
});

export default CharacterList;
