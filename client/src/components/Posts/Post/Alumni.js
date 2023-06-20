import React from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/alumni";

const Alumni = ({ setCurrentId, post }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.batch}
      />{" "}
      <div className={classes.overlay}>
        <Typography variant="h6"> {post.name} </Typography>{" "}
        <Typography variant="body2">
          {" "}
          {moment(post.createdAt).fromNow()}{" "}
        </Typography>{" "}
      </div>{" "}
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <EditIcon fontSize="default" />
        </Button>{" "}
      </div>{" "}
      <div className={classes.details}> </div>{" "}
      <Typography className={classes.title} variant="h5" gutterBottom>
        {" "}
        {post.batch}{" "}
      </Typography>{" "}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {" "}
          {post.profession}{" "}
        </Typography>{" "}
      </CardContent>{" "}
      <CardActions className={classes.cardActions}>
        {" "}
        {/* <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => dispatch(likePost(post._id))}
                                >
                                  <ThumbUpAltIcon fontSize="small" /> & nbsp; Like & nbsp;{" "}
                                  {post.likeCount}{" "}
                                </Button>{" "} */}{" "}
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete{" "}
        </Button>{" "}
      </CardActions>{" "}
      <CardActions> </CardActions>{" "}
    </Card>
  );
};

export default Alumni;
