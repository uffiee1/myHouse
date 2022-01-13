import "./estateList.css";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import EstatePic from "../../assets/house1.jpeg";
import { Link } from "react-router-dom";
import { estateRows } from "../../dummyData";
import { useState } from "react";

export default function EstateList() {
  const [data, setData] = useState(estateRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "estate",
      headerName: "Estate",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="estateListItem">
            <img src={EstatePic} alt="" className="estateListImg" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "type", headerName: "Type", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/estate/" + params.row.id}>
              <button className="estateListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="estateListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="estateList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
