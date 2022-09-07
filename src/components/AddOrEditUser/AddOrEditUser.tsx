import React from "react";
import { Formik, Form } from "formik";
import { Button, Grid } from "@mui/material";
import { FormikField } from "./FormikField";
import * as Yup from "yup";
import FormikSelect from "./FormikSelect";
import { RadioField } from "./RadioField";
import { Container } from "@mui/system";
import type * as types from './types'

const initialValues: types.IInitialValues = {
  name: "",
  email: "",
  postion: "",
  gender: 0,
};

const positionOptions: types.IPosition[] = [
  { label: "frontend", value: "frontend" },
  { label: "backend", value: "backend" },
];


const genderItem:types.IGender[] = [
  { label: "Male", value: 0 },
  { label: "Femail", value: 1 },
];

export const validationSchema = Yup.object({
  name: Yup.string().required("please enter your name"),
  email: Yup.string().required("please enter your email"),
  postion: Yup.string().required("please enter your postion"),
  gender: Yup.number().required("please check your gender"),
});

export const AddOrEditUser = () => {
  const handleSubmit = (value: types.IInitialValues) => {
    console.log(value);
  };
  return (
    <Container maxWidth='md'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <FormikField {...props} label='name' name='name' />
                </Grid>
                <Grid item xs={6}>
                  <FormikField {...props} label='email' name='email' />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect
                    {...props}
                    name='postion'
                    label='postion'
                    options={positionOptions}
                  />
                </Grid>
                <Grid item xs={6}>
                  <RadioField
                    items={genderItem}
                    {...props}
                    name='gender'
                    label='gender'
                  />
                </Grid>
                <Button type='submit'>send</Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
