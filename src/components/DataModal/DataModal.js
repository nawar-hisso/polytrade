import React, { forwardRef, useImperativeHandle } from "react";
import { Modal, Fade, Box } from "@mui/material";

import styles from "./styles";
import { COMPONENTS } from "../../constants";

const DataModal = (props, ref) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(
    ref,
    () => ({
      show() {
        handleOpen();
      },
    }),
    []
  );

  const ComponentName = COMPONENTS[props.componentName];

  return (
    <Modal
      data-testid="dataModal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={styles.modal}>
          <ComponentName handleClose={handleClose} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default forwardRef(DataModal);
