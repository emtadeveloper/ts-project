import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type * as types from "./types";
import axios from "axios";

const userContext = createContext({} as types.IContextValues);

export const UserContext = ({ children }: types.IProps) => {
  const [state, setState] = useState<types.IState>({
    pageNo: 1,
    users: [],
    mode: "add",
    isOpenModal: false,
    text: "",
    loading: false,
    edit: {
      data: null,
      id: null,
    },
  });

  const fetchData = useCallback(async () => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }));
      const response = await axios.get(
        `http://localhost:4000/users?_page=${state.pageNo}&_limit=4`
      );
      console.log(response);
      setState((prevState) => ({
        ...prevState,
        users: response.data,
        loading: false,
      }));
    } catch (e) {
      console.log(e);
    }
  }, [state.pageNo]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const values:types.IContextValues = {...state}

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export const useConsumeContext = () => useContext(userContext);
