import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  CharacterBackground: {
    backgroundColor: "#24282F",
    padding: "3rem",
  },

  pagination: {
    "& > *": {
      margin: theme.spacing(2),
      color: theme.palette.primary.antiflashwhite,
      backgroundColor: "white",
    },
  },
}));
