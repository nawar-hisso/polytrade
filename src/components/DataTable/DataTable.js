import React, { useEffect, useState } from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { Box, Button, Pagination, CircularProgress } from "@mui/material";
import moment from "moment";

import * as helpers from "../../helpers";
import { getTransactions } from "../../actions/transactions";

const DataTable = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [columns] = useState([
    { field: "id", headerName: "Tx Hash", width: 200 },
    { field: "data", headerName: "Data", width: 100 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "sender", headerName: "Sender", width: 200 },
  ]);

  const [rows, setRows] = useState([]);

  const handleLoad = () => {
    setLoading((prev) => !prev);
    dispatch(getTransactions());
    setTimeout(() => {
      setLoading((prev) => !prev);
    }, 500);
  };

  useEffect(() => {
    let tempRows = [];
    try {
      tempRows = props.transactions?.map((transaction) => {
        return {
          id: transaction.hash,
          data: transaction.to ? helpers.getCleanString(transaction.input) : "",
          date: moment(new Date(transaction.timeStamp * 1000)).format(
            "DD MMMM YYYY"
          ),
          sender: transaction.from,
        };
      });
    } catch (error) {
      alert(error.message);
    }
    setRows(tempRows);
  }, [props.transactions, loading]);

  const FooterComponent = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    return (
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box component="div">
          <Button
            role="button"
            variant="contained"
            style={{ margin: "0 5px 0 0" }}
            onClick={props.action}
            data-testid="writeData"
          >
            Write Data On Chain
          </Button>
          <Button variant="outlined" onClick={handleLoad}>
            Load
          </Button>
        </Box>
        <Pagination
          color="primary"
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => {
            apiRef.current.setPage(value - 1);
          }}
        />
      </Box>
    );
  };

  if (props.transactions?.length > 0 && !loading) {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          style={{ flexGrow: 1 }}
          components={{
            Footer: FooterComponent,
          }}
        />
      </div>
    );
  } else {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
};

export default DataTable;
