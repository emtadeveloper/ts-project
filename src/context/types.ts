import React from "react"

export interface IProps {
  children : React.ReactNode
}

export interface IUser {
    name : string ,
    email : string,
    position : string,
    gender : number,
    id : number
}

export interface IState {
    pageNo : number,
    users:IUser[],
    mode:"add" | "edit",
    isOpenModal:boolean,
    text:string,
    loading:boolean,
    edit:{
        data:null | IUser,
        id : null
    }
}

export interface IContextValues extends IState {


}