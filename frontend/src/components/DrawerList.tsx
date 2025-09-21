import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { type FC } from "react";
import { Link, NavLink } from "react-router";

interface DrawerListProps {
  pages: string[];
}
const DrawerList: FC<DrawerListProps> = ({ pages }) => {
  return (
    <>
      <Toolbar />
      <Box>
        <List>
          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton component={NavLink} to={page}>
                <ListItemText primary={page.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default DrawerList;
