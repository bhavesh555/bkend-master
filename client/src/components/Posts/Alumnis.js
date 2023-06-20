import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Event from "./Post/Alumni";

import useStyles from "./styles";
import Alumni from "./Post/Alumni";

const Alumnis = ({ setCurrentId, tag }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) =>
        post.tags === tag ? (
          <Grid item key={post._id} xs={12} sm={6}>
            <Alumni setCurrentId={setCurrentId} post={post} />{" "}
          </Grid>
        ) : null
      )}{" "}
    </Grid>
  );
};

export default Alumnis;
