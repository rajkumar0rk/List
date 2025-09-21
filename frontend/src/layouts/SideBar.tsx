import { Box, Drawer, List, ListItem, Toolbar } from "@mui/material";
import React, { useEffect, useState, type FC } from "react";
import { drawerWidth } from "../constant/styles";
import DrawerList from "../components/DrawerList";
interface SideBarProps {
  toggleDrawer: (toggle: boolean) => void;
  drawerOpen: boolean;
}
const pages = ["home", "add"];
const SideBar: FC<SideBarProps> = ({ toggleDrawer, drawerOpen }) => {
  const handleCloseDrawer = () => {
    toggleDrawer(false);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={drawerOpen}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
        onClose={handleCloseDrawer}
      >
        <DrawerList pages={pages} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <DrawerList pages={pages} />
      </Drawer>
    </Box>
  );
};

export default SideBar;
