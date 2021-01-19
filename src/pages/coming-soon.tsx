import React from "react";
import { Box } from "@material-ui/core";
import { mainBoxStyle, nameBoxStyle } from "./index";

export default function ComingSoon() {
  return <Box id="mainBox" style={mainBoxStyle}>
    <Box id="comingSoon" style={nameBoxStyle}>
      Coming Soon!
    </Box>
  </Box>
};