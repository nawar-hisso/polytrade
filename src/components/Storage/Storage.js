import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import DataTable from "../DataTable/DataTable";
import DataModal from "../DataModal/DataModal";

import { getAllData } from "../../actions/data";
import { getTransactions } from "../../actions/transactions";

const Storage = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getAllData());
  }, [dispatch]);

  const showModal = () => {
    modalRef.current.show();
  };

  return (
    <>
      <DataTable
        transactions={transactions ? transactions : []}
        action={showModal}
      />
      <DataModal ref={modalRef} componentName="dataForm" />
    </>
  );
};

export default Storage;
