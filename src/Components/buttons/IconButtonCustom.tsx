import React from "react";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

type IconButtonCustomProps = {
  label: React.ReactNode;
  onClick?: () => void;
};

const IconButtonCustom: React.FC<IconButtonCustomProps> = ({ label, onClick }) => {
  return (
    <Button
      startIcon={<SaveIcon />}
      variant="contained"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default IconButtonCustom;
