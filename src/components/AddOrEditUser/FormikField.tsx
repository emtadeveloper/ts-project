import {Field ,FormikProps,ErrorMessage} from "formik"
import { IInitialValues } from "./AddOrEditUser"
import {TextField,} from '@mui/material';

interface IProps extends FormikProps<IInitialValues>{
    name : string ,
    label : string
}

export const FormikField = ({name , label ,errors, submitCount}:IProps) => {
  return (
    <Field error={!!submitCount && errors[name as keyof IInitialValues]} 
    helperText={!!submitCount && <ErrorMessage name={name}/>} name={name} label={label} as={TextField}/>
  )
}
