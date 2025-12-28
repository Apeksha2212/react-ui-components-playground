import React from "react";
import Button from "@mui/material/Button";

type OutlineButtonProps = {
  label: React.ReactNode;
  onClick?: () => void;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {label}
    </Button>
  );
};

export default OutlineButton;
