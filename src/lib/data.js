import { connectToDb } from "./databaseConnection";
import { Post, User } from "./models";

// Fetch all posts
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

// Fetch a single post
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

// Fetch a single user
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
