import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";

// import Modal from './Modal';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ErrorModal = (props) => {

  return (
    <Modal
      open={!!props.error}
      onClose={props.onClear}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          An Error Occurred!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.error}
        </Typography>
        <Stack mt={2} direction="row" justifyContent='flex-end'>
        <Button sx={{background:'#222222', color:'darkgray'}} onClick={props.onClear}>Okay!</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
