"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { _id } = Object.fromEntries(formData);
  try {
    connectDB();
    await User.findByIdAndDelete(_id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete User");
  }
  revalidatePath("/dashboard/users");
};

///////////////////////////////////////////////////////////////////////

export const addProduct = async (formData) => {
  const { title, description, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, description, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const updateFields = {
      title,
      description,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { _id } = Object.fromEntries(formData);
  try {
    connectDB();
    await Product.findByIdAndDelete(_id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {

  const{username, password} = Object.fromEntries(formData)
  try {
    await signIn("credentials",{username, password})
    
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          redirect("/dashboard")
      }
    }
    throw error;
  }
  redirect("/dashboard")
}
