import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
  const counter = useSelector((state) => state.counter);

  const API_URL = "http://127.0.0.1:8000/api/";
  const BEARER_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODViZWY1YjVkYWIxZDhkMmJkZmNjNDMxMDMyOGRlZmI5MGI3ZDhmNmEyN2MwNDlhMDkyMDg4Njk2MTIxMzQ2ZTIyNDZkZmM4NzU3ZTQwMWIiLCJpYXQiOjE2NzUzNzAyOTMuODU0MDQ5LCJuYmYiOjE2NzUzNzAyOTMuODU0MDUxLCJleHAiOjE3MDY5MDYyOTMuNzUwNzY3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.inaZphQoLn0rTEyLn0mTkAT1mt6rOHWqvU5C_k0JV44RQZJmukh3KAew1B89gYcX7TR8WG9pV1vN-efZDn3J_v11zCT0_Y9QugKNUS5WERAWFMev1mPCcBUg5u90ivX7wgt7drhpc0_M_w2ubyjLvWJfVJ6MG1Yo6sys7jjpHphNPIBIOdife4MtQomCvritlzLYIhIVIKR0qCeXOahAh7ZXsdJoCmyJ4zkVrhwk_OSlcfP26hXuDy3FdJMj9IM-S1VGYiTfpCZcfyuw8MrcTu3KOwHhup89tQAfZPivPmuBcgP42qiYC3joj3YC9t8TeDyh_xkqZCP1IlgxbbJj3fwF4LogH4-RmmqG5pNX5U-0LPPXDBvTFcN3mMgD29paXaTcMavSgjYfNEU_oMdJTT47mJf9VbzW-gsEEuc80tw0c6E2zyUGgNQU0pAAs2dTRL6j3l5ZFNOQAKbcmHg6ICPJY-EWOAgG5LBMGFU477xt8lI7Y4XMrpKDRs8Xozt3eAL74_aqMHreQBpcIWZM2J5I-anTt7hoiC0RO4djhRfautV6U1j93Ne2y5fT3mUGrNRf-8o-yTRj5vWKuBRxNhx1TeZxVKdwKOHdApCI_tt6OAbIgX3a_IHAx6hQng--UkIbQqfdG4wL-FCyJSf0tDDmjzGHo3sf5oXn6E--WDI";
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const Increment = () => {
    dispatch({ type: "Increment" });
  };
  const Decrement = () => {
    dispatch({ type: "Decrement" });
  };

  async function fetchData() {
    try {
      const response = await axios.get(`${API_URL}user2`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      setUsers(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const downloadExcel = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}Excel`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        responseType: "blob", // added to get the binary data
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.xlsx");
      document.body.appendChild(link);
      link.click();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const downloadPDF = async () => {
    try {
      setLoading2(true);
      const response = await axios.get(`${API_URL}user-list-pdf`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        responseType: "blob", // added to get the binary data
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.pdf");
      document.body.appendChild(link);
      link.click();
      setLoading2(false);
    } catch (error) {
      console.error(error);
      setLoading2(false);
    }
  };

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

            <h1>{counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}> -</button>
          </CardContent>
        </Card>
      </Grid>
      <button onClick={fetchData()}>fetch user data</button>
      {/* <div>{users}</div> */}
      <button disabled={loading} onClick={downloadExcel}>
        {loading ? "Loading..." : "Download Excel"}
      </button>
      <button disabled={loading2} onClick={downloadPDF}>
        {loading2 ? "Loading..." : "Download PDF"}
      </button>
    </Grid>
  );
};

export default LandingPage;
