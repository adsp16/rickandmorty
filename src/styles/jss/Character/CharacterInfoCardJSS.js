import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    backgroundColor: "#3A3C42 !important",
  },
  cardContent: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.white,
    height: "100%",
    padding: theme.spacing(3),
  },
  redLight: {
    height: "0.9rem",
    width: "0.9rem",
    marginRight: "0.375rem",
    background: "rgb(214, 61, 46)",
    borderRadius: "50%",
    marginLeft: "0.4rem",
  },
  greenLight: {
    background: "rgb(57,255,20)",
    height: "0.9rem",
    width: "0.9rem",
    marginRight: "0.375rem",
    borderRadius: "50%",
    marginLeft: "0.4rem",
  },
}));
