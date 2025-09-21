import { Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import React from "react";
import type { SxProps } from "@mui/material/styles";

interface Props {
  logoIcon: SxProps;
  logoText: SxProps;
}

const Logo = ({ logoIcon, logoText }: Props) => {
  return (
    <>
      <PhoneIphoneIcon sx={{ ...logoIcon, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component={"a"}
        href="/#"
        sx={{
          ...logoText,
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        MOBILE
      </Typography>
    </>
  );
};

export default Logo;
