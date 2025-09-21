import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

interface MobileData {
  product_name: string;
  brand: string;
  model: string;
  color: string;
  storage_capacity: string;
  price: number;
  discount_percentage: number;
  release_date: Date;
  screen_size: number;
  processor: string;
}

const initialState: MobileData = {
  product_name: "",
  brand: "",
  model: "",
  color: "",
  storage_capacity: "",
  price: 0,
  discount_percentage: 0,
  release_date: new Date("2002-02-02"),
  screen_size: 0,
  processor: "",
};
const AddMobiles = () => {
  const [data, setData] = useState<MobileData>(initialState);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/v1/mobile", data);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setData((prev) => {
      // if (!prev) return initialState;
      return {
        ...prev,
        [name]: type === "number" ? (value === "" ? 0 : Number(value)) : value,
      } as MobileData;
    });
    // setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box sx={{ p: 3, mx: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Add Mobiles
        </Typography>
        <TextField
          value={data?.product_name}
          onChange={handleChange}
          type="text"
          name="product_name"
          label="Product Name"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.brand}
          onChange={handleChange}
          type="text"
          name="brand"
          label="Brand Name"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.model}
          onChange={handleChange}
          type="text"
          name="model"
          label="Model Name"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.color}
          onChange={handleChange}
          type="text"
          name="color"
          label="Color"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.storage_capacity}
          onChange={handleChange}
          type="text"
          name="storage_capacity"
          label="Storage Capacity"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.price}
          onChange={handleChange}
          type="number"
          name="price"
          label="price"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.discount_percentage}
          onChange={handleChange}
          type="number"
          name="discount_percentage"
          label="Discount Percentage"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          type="date"
          value={data?.release_date}
          onChange={handleChange}
          name="release_date"
          label="Release Date"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.screen_size}
          onChange={handleChange}
          type="number"
          name="screen_size"
          label="Screen Size"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          value={data?.processor}
          onChange={handleChange}
          type="text"
          name="processor"
          label="Processor Name"
          variant="standard"
          fullWidth
          required
        />
        <Button type="submit">Submit </Button>
      </form>
    </Box>
  );
};

export default AddMobiles;
