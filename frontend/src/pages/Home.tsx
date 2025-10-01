import { Box, Link, Stack } from "@mui/material";
import { DataGrid, type GridRowsProp, type GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "product_name", headerName: "Product Name", width: 200 },
  { field: "brand", headerName: "Brand" },
  { field: "model", headerName: "Model" },
  { field: "color", headerName: "Color" },
  { field: "storage_capacity", headerName: "Storage" },
  { field: "price", headerName: "Price" },
  { field: "discount_percentage", headerName: "Discount" },
  { field: "release_date", headerName: "Release Date", width: 150 },
  { field: "screen_size", headerName: "Screen Size" },
  { field: "processor", headerName: "Processor", width: 200 },
];
const Home = () => {
  const [data, setData] = useState<GridRowsProp>([]);
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get("http://localhost:8000/api/v1/mobile");
      setData(response.data);
    };
    apiCall();
  }, []);
  return (
    <Box sx={{ p: 3 }}>
      <Stack>
        <Link />
      </Stack>
      <DataGrid rows={data} columns={columns} getRowId={(row) => row._id} />
    </Box>
  );
};

export default Home;
