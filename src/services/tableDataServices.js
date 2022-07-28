import { request } from "./common";
import axios from "axios";

export const getTableData = async () => {
  try {
    const response = await request("get-all-stores");
    return response?.payload?.data;
  } catch (e) {
    return e;
  }
};

export const getCategories = async (id) => {
  try {
    return await axios.get(`https://product-store-v1.herokuapp.com/get-store-by-id/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const getProductData = async (id) => {
  try {
    return await axios.get(`https://product-store-v1.herokuapp.com/get-products-by-store-id/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const addData = async (body) => {
  try {
    const response = await request("add-store", "POST", body);
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};

export const addProductData = async (body, id) => {
  try {
    const response = await request(`add-product/${id}`, "POST", body);
    console.log(response);
    return response;
  } catch (err) {
    return err;
  }
};
