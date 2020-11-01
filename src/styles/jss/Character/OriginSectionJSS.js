import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
  },
  mainSection: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
  },
  downIcon: {
    color: "white",
    fontSize: 40,
  },
}));
