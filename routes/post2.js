import express from "express";
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/course", getPosts);
router.post("/course", createPost);
router.patch("/course/:id", updatePost);
router.delete("/course/:id", deletePost);
router.patch("/course/:id/likePost", likePost);
router.get("/alumni", getPosts);
router.post("/alumni", createPost);
router.patch("/alumni/:id", updatePost);
router.delete("/alumni/:id", deletePost);
router.patch("/alumni/:id/likePost", likePost);
router.get("/gallery", getPosts);
router.post("/gallery", createPost);
router.patch("/gallery/:id", updatePost);
router.delete("/gallery/:id", deletePost);
router.patch("/gallery/:id/likePost", likePost);
export default router;