import { Button } from "@material-ui/core";
import React from "react";
import { COLORS } from "../constants";

interface ButtonProps {
  text: string;
  backgroundColor: COLORS;
  size?: "small" | "medium" | "large";
  onClick: () => void;
}

export default class StyledButton extends React.Component<ButtonProps> {
  constructor(props) {
    super(props);
  }
    
  style: any = {
    fontFamily: "Karla",
    fontSize: "18px",
    fontWeight: "500",
    color: "white",
    backgroundColor: COLORS.DARK_ORANGE,
    paddingTop: "10px",
    paddingBottom: "10px",
  }

  render() {
    this.style.backgroundColor = this.props.backgroundColor;
    return <Button
      style={this.style}
      variant="contained"
      size={this.props.size || "medium"}
      fullWidth
      onClick={this.props.onClick}
    >
      {this.props.text}
    </Button>
  }
}