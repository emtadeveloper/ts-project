import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select,FormHelperText } from "@mui/material";
import { FormikProps } from "formik";
import type * as types from './types'


interface IProps extends FormikProps<types.IInitialValues> {
  name: string;
  label: string;
  options: types.IPosition[];
}

const FormikSelect = ({
  name,
  label,
  options,
  errors,
  submitCount,
  values,
  handleChange,
}: IProps) => {
  return (
    <Box>
      <FormControl fullWidth error={!!submitCount && !!errors.postion}>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          name={name}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={values.postion}
          onChange={handleChange}
        >
          {options.map((item)=>( <MenuItem  key={item.label} value={item.value}>{item.label}</MenuItem>))}
        </Select>
        {!!submitCount && errors.postion && <FormHelperText>{errors.postion}</FormHelperText>}
      </FormControl>
    </Box>
  );
};
export default FormikSelect;
