import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { pink, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to right, ${pink[50]}, ${green[50]})`,
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50vh",
    backgroundColor: theme.palette.background.default,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        lg={4}
        xl={3}
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="h4" className={classes.title}>
          Welcome to my landing page!
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant={matches ? "h5" : "h2"}>Get started</Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              <a href="/products" style={{ color: "white" }}>
                Product Page
              </a>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
