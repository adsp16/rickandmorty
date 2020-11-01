import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useStyles } from "../../styles/jss/Character/OriginSectionJSS";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const OriginSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const char = useSelector((state) => state.character.character);
  const location = useSelector((state) => state.location.location);

  useEffect(() => {
    if (char) {
      const url = char.location.url;
      const sliced = url.slice(31);

      dispatch(actions.getLocation(sliced))
        .then((result) => {})
        .catch((err) => console.log(err));
    }
  }, [char, dispatch]);

  return (
    <div className={classes.root}>
      <Accordion className={classes.mainSection}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.downIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" className={classes.heading}>
            Origin
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>
              Dimension :
            </Typography>
            <Typography variant="h5">{location.dimension}</Typography>
          </Box>
        </AccordionDetails>
        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>Name :</Typography>
            <Typography variant="h5">{location.name}</Typography>
          </Box>
        </AccordionDetails>
        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <Typography style={{ marginRight: "0.6rem" }}>Type:</Typography>
            <Typography variant="h5">{location.type}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OriginSection;
