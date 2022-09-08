import React from "react"

export interface IProps {
  children : React.ReactNode
}

export interface IAdduser {
    name : string ,
    email : string,
    postion : string,
    gender : number,
}
export interface IUser extends IAdduser {
    id : number
}


export interface IState {
    pageNo : number,
    users:IUser[],
    mode:"add" | "edit",
    isOpenModal:boolean,
    text:string,
    loading:boolean,
    edit:any,
    pageCount : number
}

export interface IContextValues extends IState {
    handleClickOpen : ()=> void,
    handleClickClose: ()=> void,
    handlePageChange : (event:React.ChangeEvent<unknown>,value:number)=> void
    addNewUser : (data:IAdduser)=>void
    handleEditUser : (id:number)=> void
    editUser : (data:IAdduser)=>void
    handleDeleteUser : (id:number)=> void
    handleTextChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}