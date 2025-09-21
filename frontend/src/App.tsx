import { useState } from "react";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import AddMobiles from "./pages/AddMobiles";
import { drawerWidth } from "./constant/styles";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (toggle: boolean) => {
    setOpen(toggle);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} drawerOpen={open} />
      <Box sx={{ display: "flex" }}>
        <SideBar toggleDrawer={toggleDrawer} drawerOpen={open} />
        <Box
          component="main"
          sx={{ flexGrow: 1, width: `calc(100% - ${drawerWidth}px)` }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddMobiles />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
