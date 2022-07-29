import React, { useEffect, useState } from "react";
import Stores from "../components/stores";
import { getTableData } from "../services/tableDataServices";
export default function TableContainer() {
  const [tableRowsData, setTableRowsData] = useState([]);

  const fetchTableData = async () => {
    const tableData = await getTableData();

    setTableRowsData(tableData);
    console.log(tableData);
  };
  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div>
      <Stores tableRowsData={tableRowsData} apiGet={getTableData} />
    </div>
  );
}
