import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import type * as types from './types'

import { FormikProps } from "formik";

interface IProps extends FormikProps<types.IInitialValues> {
    name: string;
    label: string;
    items: types.IGender[];
  }
export const RadioField = ({name,label,items,values,errors,handleChange,submitCount}:IProps) => {
  return (
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
    <RadioGroup
    value={values.gender}
      row name={name}  onChange={handleChange}
    >
        {items.map((g)=>(
            <FormControlLabel key={g.label} value={g.value} control={<Radio />} label={g.label} />
        ))}
        {!!submitCount && errors.postion && <FormHelperText>{errors.postion}</FormHelperText>}
    </RadioGroup>
  </FormControl>
  )
}
