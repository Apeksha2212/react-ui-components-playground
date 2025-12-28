import { ReactNode } from "react";
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  padding: 20,
  background: "#fff",
  borderRadius: 10
};

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  children
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6">{title}</Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
