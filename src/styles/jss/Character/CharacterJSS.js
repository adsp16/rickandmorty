import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  charWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  statsCard: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    maxWidth: 500,
  },
}));
