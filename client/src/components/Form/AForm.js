import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/alumni";

const AForm = ({ currentId, setCurrentId, tag }) => {
  const classes = useStyles();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id == currentId) : null
  );

  const [postData, setPostData] = useState({
    Name: "",
    Batch: "",
    Profession: "",
    linkedin: "",
    image: "",
    tags: tag,
    selectedFile: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      Name: "",
      Batch: "",
      Profession: "",
      linkedin: "",
      image: "",
      tags: tag,
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {" "}
          {currentId ? "Editing" : "Creating"}{" "}
        </Typography>{" "}
        <TextField
          name="Name"
          variant="outlined"
          label="Name"
          required
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />{" "}
        <TextField
          name="Batch"
          variant="outlined"
          label="Batch"
          required
          fullWidth
          value={postData.batch}
          onChange={(e) => setPostData({ ...postData, batch: e.target.value })}
        />{" "}
        <TextField
          name="Profession"
          variant="outlined"
          label="Profession"
          required
          fullWidth
          value={postData.profession}
          onChange={(e) =>
            setPostData({ ...postData, profession: e.target.value })
          }
        />{" "}
        <TextField
          name="LinkedIn"
          variant="outlined"
          label="Linkedin-link"
          fullWidth
          value={postData.linkedin}
          onChange={(e) =>
            setPostData({ ...postData, linkedin: e.target.value })
          }
        />{" "}
        <TextField
          name="image"
          variant="outlined"
          label="IMage-link"
          fullWidth
          value={postData.image}
          onChange={(e) => setPostData({ ...postData, image: e.target.value })}
        />{" "}
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          required
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />{" "}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />{" "}
        </div>{" "}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit{" "}
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear{" "}
        </Button>{" "}
      </form>{" "}
    </Paper>
  );
};

export default AForm;
