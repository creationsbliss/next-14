import { unstable_noStore } from "next/cache";
import { connectToDb } from "./databaseConnection";
import { Post, User } from "./models";

// Fetch all posts
export const getPosts = async () => {
  try {
    await connectToDb();
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
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

// Fetch a single user
export const getUser = async (id) => {
  unstable_noStore();
  try {
    await connectToDb();
    const user = await User.findById({ _id: id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
