import useSWR from "swr";
import {
  readOneUserProduct,
  readProduct,
  ViewProductOrder,
} from "../api/Product";
import { useSelector } from "react-redux";
import { getOneUserList } from "../api/UserApi";
import { useEffect, useState } from "react";
import axios from "axios";

export const useProduct = (userID: string, storeID: string) => {
  const { data } = useSWR("/get-one-product", readProduct, {
    refreshInterval: 1000,
  });

  return { data, userID, storeID };
};

export const useProductOrder = (userID: string) => {
  const { data } = useSWR(`/${userID}/get-one-product`, ViewProductOrder, {
    refreshInterval: 1000,
  });

  return { data, userID };
};

export const allProductsHooks = () => {
  const { data: allProduct, isLoading } = useSWR(
    `get-all-product`,
    readProduct,
    {
      refreshInterval: 5000,
    }
  );
  return { allProduct, isLoading };
};
export const oneUserProductHook = () => {
  const _id = useSelector((state: any) => state?.user);
  const { data, isLoading } = useSWR(
    `${_id}/view-user-products`,
    () => readOneUserProduct(_id!),
    { refreshInterval: 5000 }
  );
  console.log(_id);
  return { data, isLoading };
};

export const oneUserListHook = () => {
  const userID = useSelector((state: any) => state?.user);
  const { data: userHook, isLoading } = useSWR(
    `/${userID?._id}/get-list`,
    () => getOneUserList(userID),
    { refreshInterval: 5000 }
  );
  return { userHook, isLoading };
};
