import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type SelectInputProps = {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
};

const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>

      <Select value={value} onChange={onChange} label={label}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
