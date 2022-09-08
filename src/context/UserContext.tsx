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
  //
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
    pageCount: 0,
  });

  const handleClickOpen = (): void => {
    setState((prevState) => ({
      ...prevState,
      isOpenModal: true,
    }));
  };

  const handleClickClose = (): void => {
    setState((prevState) => ({
      ...prevState,
      isOpenModal: false,
    }));
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setState((prevState) => ({
      ...prevState,
      pageNo: value,
    }));
  };

  const handleEditUser = async (id: number) => {
    setState((prevState) => ({
      ...prevState,
      isOpenModal: true,
      mode: "edit",
      loading: true,
    }));
    const response = await axios.get(`http://localhost:4000/users/${id}`);
    setState((prevState) => ({
      ...prevState,
      loading: false,
      edit: { data: response.data, id: id },
    }));
  };

  const addNewUser = async (data: types.IAdduser) => {
    const response = await axios.post("http://localhost:4000/users", data);
    if (response.status === 201) {
      setState((prevState) => ({
        ...prevState,
        isOpenModal: false,
      }));
    }
    fetchData();
    fetchAllUsers();
  };

  const fetchData = useCallback(async () => {
    try {
      if (state.text.length >= 2) {
        setState((prevState) => ({ ...prevState, loading: true }));
        const response = await axios.get(
          `http://localhost:4000/users?q=${state.text}&_page=${state.pageNo}&_limit=4`
        );
        console.log(response);
        setState((prevState) => ({
          ...prevState,
          users: response.data,
          loading: false,
        }));
      } else {
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
      }
    } catch (e) {
      console.log(e);
    }
  }, [state.pageNo,state.text]);

  const handleDeleteUser = async (id: number) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    fetchData();
    fetchAllUsers();
    if (state.users.length === 1) {
      setState((prevState) => ({
        ...prevState,
        pageNo: prevState.pageNo - 1,
      }));
    }
  };

  const editUser = async (data: types.IAdduser) => {
    const response = await axios.put(
      `http://localhost:4000/users/${state.edit.id}`,
      data
    );
    setState((prevState) => ({
      ...prevState,
      isOpenModal: false,
    }));
    console.log("fsfd");
    fetchData();
  };

  const fetchAllUsers = useCallback(async () => {
    if(state.text.length>=3) {
      const response = await axios.get(`http://localhost:4000/users?q=${state.text}/`);
      console.log("response", response.data);
      const usersCount = response.data.length;
      const pageCount = Math.ceil(usersCount / 4);
      setState((prevState) => ({
        ...prevState,
        pageCount,
      }));
    }else{
      const response = await axios.get(`http://localhost:4000/users/`);
      console.log("response", response.data);
      const usersCount = response.data.length;
      const pageCount = Math.ceil(usersCount / 4);
      setState((prevState) => ({
        ...prevState,
        pageCount,
      }));
    }
  }, [state.text]);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const values: types.IContextValues = {
    ...state,
    handleClickOpen,
    handleClickClose,
    handlePageChange,
    addNewUser,
    handleEditUser,
    editUser,
    handleDeleteUser,
    handleTextChange,
  };

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export const useConsumeContext = () => useContext(userContext);
