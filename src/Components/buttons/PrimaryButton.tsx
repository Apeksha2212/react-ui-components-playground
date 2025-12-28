import React from "react";
import Button from "@mui/material/Button";

type PrimaryButtonProps = {
  label: React.ReactNode;
  onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
