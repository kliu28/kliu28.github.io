import React from "react";
import Button from "../components/StyledButton";
import { COLORS } from "../constants";
import { Box, Grid } from "@material-ui/core";
import { navigate } from "@reach/router";

export const mainBoxStyle: any = {
  paddingLeft: "10%",
  margin: "0",
  position: "absolute",
  top: "50%",
  width: "80%",
  //MsTransform: "translateY(-50%)",
  transform: "translateY(-50%)",
}

export const nameBoxStyle: any = {
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

enum Page {
  About = "about",
  ComingSoon = "coming-soon",
}

function onClickButton(page: Page) {
  navigate(page);
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
        <Button text="about" backgroundColor={COLORS.DARK_ORANGE} onClick={() => onClickButton(Page.ComingSoon)}/>
      </Box>
      <Box style={buttonBoxStyle}>
        <Button text="resources" backgroundColor={COLORS.DARK_ORANGE} onClick={() => onClickButton(Page.ComingSoon)}/>
      </Box>
      <Box style={buttonBoxStyle}>
        <Button text="blog" backgroundColor={COLORS.DARK_ORANGE} onClick={() => onClickButton(Page.ComingSoon)}/>
      </Box>
    </Grid>
  </Box>
};
