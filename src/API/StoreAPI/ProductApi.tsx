import axios from "axios";

let URL: string = "http://localhost:2103/api/v1";
// let URL: string = "https://boundarymarket.onrender.com/api/v1";

export const createProduct = async (data: any, userID: string) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return await axios.post(`${URL}/${userID}/register-products`, data, config);
};
export const purchaseProduct = async (data: any, userID: string, productID) => {
  return await axios
    .post(`${URL}/${userID}/${productID}/register-products`, data)
    .then((res: any) => {
      return res.data.data;
    });
};

export const readProduct = async () => {
  return await axios.get(`${URL}/get-all-product`).then((res: any) => {
    return res.data.data;
  });
};

export const readOneProduct = async (productID: string) => {
  return await axios
    .get(`${URL}/${productID}/get-one-product`)
    .then((res: any) => {
      return res.data.data;
    });
};
export const readOneUserProduct = async (userID: string) => {
  return await axios
    .get(`${URL}/${userID}/view-user-products`)
    .then((res: any) => {
      return res.data.data;
    });
};
export const ViewProductOrder = async (userID: string) => {
  return await axios.get(`${URL}/${userID}/view-orders`).then((res: any) => {
    return res.data.data;
  });
};

export const updateStockProduct = async (productID: string, data: number) => {
  return await axios
    .patch(`${URL}/update-stock-product/${productID}`, { QTYPurchased: data })
    .then((res: any) => {
      return res.data.data;
    });
};
export const deleteStockProduct = async (productID: string, userID: string) => {
  return await axios
    .delete(`${URL}/${userID}/${productID}/update-stock-product`)
    .then((res: any) => {
      return res.data.data;
    });
};
export const createList = async (userID: string, data: any) => {
  return await axios
    .post(`${URL}/${userID}/create-list`, data)
    .then((res: any) => {
      return res.data.data;
    });
};
