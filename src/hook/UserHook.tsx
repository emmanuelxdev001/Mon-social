import { useSelector } from "react-redux";
import useSWR from "swr";
import { getOneUser, readUser } from "../api/UserApi";

export const oneUserHook = () => {
  const userID = useSelector((state: any) => state.user);

  const { data, isLoading } = useSWR(
    `${userID}/get-one-user`,
    () => getOneUser(userID!),
    { refreshInterval: 5000 }
  );
  return { data, isLoading };
};

export const allUserHook = () => {
  const { data: alluser, isLoading } = useSWR("get-all-user", readUser, {
    refreshInterval: 5000,
  });
  return { alluser, isLoading };
};
