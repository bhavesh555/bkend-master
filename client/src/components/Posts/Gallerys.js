import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import Gallery from "./Post/Gallery";

const Gallerys = ({ setCurrentId, tag }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

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
            <Gallery setCurrentId={setCurrentId} post={post} />{" "}
          </Grid>
        ) : null
      )}{" "}
    </Grid>
  );
};

export default Gallerys;
