import { User, Product } from "./models";
import { connectDB } from "./utils";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");
  const ITEMS_PER_PAGE = 2;
  try {
    connectDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { users, count };
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async (id) => {
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");
  const ITEMS_PER_PAGE = 2;
  try {
    connectDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { products, count };
  } catch (error) {
    console.log(error);
  }
};

export const fetchProduct = async (id) => {
  try {
    connectDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
  }
};
