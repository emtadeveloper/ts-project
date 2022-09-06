import React from 'react'
import {Formik,Form} from "formik"
import {Button} from '@mui/material';
import { FormikField } from './FormikField';
import * as Yup from "yup"
import FormikSelect from "./FormikSelect"

export interface IInitialValues {
  name : string,
  email : string,
  postion : string
}

export interface IPosition {
  label : string ,
  value : string
}

const positionOptions:IPosition[] = [{label:'frontend' , value : 'frontend'},{label:'backend' , value : 'backend'}]

const initialValues:IInitialValues = {
  name : "",
  email : "",
  postion:""
}

export const validationSchema = Yup.object({
  name : Yup.string().required("please enter your name"),
  email : Yup.string().required("please enter your email"),
  postion : Yup.string().required("please enter your postion")

})

export const AddOrEditUser = () => {

  const handleSubmit = (value :IInitialValues )=> {
    console.log(value)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>{(props)=>{
      return(
        <Form>
          <FormikField {...props} label="name"  name="name"/>
          <FormikField {...props} label="email"  name="email"/>
          <FormikSelect {...props}  name="postion" label="postion" options={positionOptions}/>
          <Button type='submit'>send</Button>
        </Form>
      )
    }}</Formik>
  )
}
