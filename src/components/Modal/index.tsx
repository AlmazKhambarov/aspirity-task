import { Modal } from "antd";
import React, { FC, ReactNode } from "react";
interface Iprops {
  open: boolean;
  setOpen: React.ReactNode | any;
  children:ReactNode
}
const CustomModal: FC<Iprops> = ({ open, setOpen, children}) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return <Modal open={open} footer onCancel={handleCancel}>{children}</Modal>;
};

export default CustomModal;
