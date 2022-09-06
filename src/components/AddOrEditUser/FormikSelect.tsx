import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { FormikProps } from "formik";
import { IInitialValues, IPosition } from "./AddOrEditUser";

interface IProps extends FormikProps<IInitialValues> {
  name: string;
  label: string;
  options: IPosition[];
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
      </FormControl>
    </Box>
  );
};
export default FormikSelect;
