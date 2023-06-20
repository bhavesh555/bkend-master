import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/course";

import memories from "./images/memories.png";
import Courses from "./components/Posts/Courses";
import CForm from "./components/Form/CForm";

import useStyles from "./styles";

const CApp = (props) => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {" "}
          {props.heading}{" "}
        </Typography>

        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>{" "}
      {/* <Grow in> */}{" "}
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Courses setCurrentId={setCurrentId} tag={props.tag} />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={4}>
            {" "}
            {console.log(currentId)}{" "}
            <CForm
              currentId={currentId}
              setCurrentId={setCurrentId}
              tag={props.tag}
            />{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>{" "}
      {/* </Grow>{" "} */}{" "}
    </Container>
  );
};

export default CApp;
