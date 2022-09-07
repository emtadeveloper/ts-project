import {Field ,FormikProps,ErrorMessage} from "formik"
import type * as types from './types'
import {TextField,} from '@mui/material';

interface IProps extends FormikProps<types.IInitialValues>{
    name : string ,
    label : string
}

export const FormikField = ({name , label ,errors, submitCount}:IProps) => {
  return (
    <Field fullWidth error={!!submitCount && errors[name as keyof types.IInitialValues]} 
    helperText={!!submitCount && <ErrorMessage name={name}/>} name={name} label={label} as={TextField}/>
  )
}
