import React from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./ThemeSwitch.style";

const ThemeSwitch = ({ themeToggler }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch onChange={themeToggler} />}
      />
    </FormGroup>
  );
};

export default ThemeSwitch;
