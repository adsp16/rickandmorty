import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../../styles/jss/Character/CharacterCardJSS";
import {
  Card,
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const CharacterCard = React.memo(({ char }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Link style={{ textDecoration: "none" }} to={`/characters/${char.id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={char.name}
              image={char.image}
              title={char.name}
            />
            <CardContent className={classes.cardContent}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.nameBox}
              >
                {char.status === "Alive" ? (
                  <span className={classes.greenLight}></span>
                ) : (
                  <span className={classes.redLight}></span>
                )}
                <Typography variant="h5" noWrap>
                  {char.name.slice(0, 18)}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </React.Fragment>
  );
});

export default CharacterCard;
