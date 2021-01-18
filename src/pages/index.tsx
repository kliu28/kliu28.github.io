import React from "react";
import Button from "../components/StyledButton";
import { COLORS } from "../constants";
import { Box, Grid } from "@material-ui/core";

const mainBoxStyle: any = {
  paddingLeft: "10%",
  margin: "0",
  position: "absolute",
  top: "50%",
  width: "80%",
  //MsTransform: "translateY(-50%)",
  transform: "translateY(-50%)",
}

const nameBoxStyle: any = {
  fontSize: "100px",
  //fontWeight: "bold",
  color: "black",
  width: "80%",
  textAlign: "left",
  paddingBottom: "30px",
}

const buttonBoxStyle: any = {
  paddingRight: "3%",
  paddingBottom: "3%",
  width: "175px",
}

export default function Home() { 
  return <Box id="mainBox" style={mainBoxStyle}>
    <Box id="nameBox" style={nameBoxStyle}>
      Hi! I'm Katherine Liu.
    </Box>
    <Grid 
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Box style={buttonBoxStyle}>
        <Button text="about" backgroundColor={COLORS.DARK_ORANGE}></Button>
      </Box>
      <Box style={buttonBoxStyle}>
        <Button text="resources" backgroundColor={COLORS.DARK_ORANGE}></Button>
      </Box>
      <Box style={buttonBoxStyle}>
        <Button text="blog" backgroundColor={COLORS.DARK_ORANGE}></Button>
      </Box>
    </Grid>
  </Box>
  
  // return <Button text="about" backgroundColor={COLORS.DARK_ORANGE}></Button>
};
