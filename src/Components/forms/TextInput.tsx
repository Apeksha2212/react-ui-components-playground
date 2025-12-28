import React from "react";
import { TextField } from "@mui/material";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  );
};

export default TextInput;
