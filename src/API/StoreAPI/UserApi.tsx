import axios from "axios";

const URL: string = "http://localhost:2103/api/v1";
// const URL: string = "https://boundarymarket.onrender.com/api/v1";

export const createUser = async (data: any, adminID: any) => {
  try {
    return await axios
      .post(`${URL}/${adminID}/register-users`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const createAdmin = async (data: any) => {
  try {
    return await axios.post(`${URL}/register-admin`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const createBuyer = async (data: any) => {
  try {
    return await axios.post(`${URL}/register-buyer`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readUser = async () => {
  try {
    return await axios.get(`${URL}/get-all-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (userID: any) => {
  try {
    return await axios.get(`${URL}/${userID}/get-one-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const getOneUserList = async (userID: any) => {
  try {
    return await axios.get(`${URL}/${userID}/get-list`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateUsernImage = async (userID: any) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return axios.patch(`${URL}/${userID}/update-image`, config).then((res) => {
    return res.data.data;
  });
};
export const updateUserName = async (userID: any, data: any) => {
  return axios.patch(`${URL}/${userID}/update-name`, data).then((res: any) => {
    return res.data.data;
  });
};
export const updateUserDetail = async (userID: any, data: any) => {
  return axios.patch(`${URL}/${userID}/update-detail`, data).then((res) => {
    return res.data.data;
  });
};
export const updateUserInfo = async (userID: any, data: any) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return axios.patch(`${URL}/${userID}/update-info`, data, config);
};
