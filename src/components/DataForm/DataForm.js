import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Typography, Button } from "@mui/material";

import { storeData } from "../../actions/data";

import styles from "./styles";

const DataForm = (props) => {
  const [word, setWord] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleStoreData = () => {
    dispatch(storeData(word));
    props.handleClose();
  };

  return (
    <Box component="form" sx={styles.box} noValidate autoComplete="off">
      <Box component="div">
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Write Data OnChain
        </Typography>
        <TextField
          label="Data"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </Box>

      <Box component="div">
        <Button
          variant="contained"
          onClick={handleStoreData}
          sx={styles.write}
          disabled={!word}
          id="write-btn"
        >
          Write
        </Button>
        <Button
          variant="outlined"
          onClick={props.handleClose}
          sx={styles.cancel}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default DataForm;
