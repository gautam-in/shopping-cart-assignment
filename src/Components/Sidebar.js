import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import "./Sidebar.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "96%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Sidebar(props) {
  const classes = useStyles();
  const [category, setcategory] = React.useState("");
  const onselectionchange = (e) => {
    console.log(e.target.id || e.target.value);
    const category = e.target.id || e.target.value || "";
    props.eventhandler(category);
    setcategory(e.target.id || e.target.value);
  };
  return (
    <div>
      <div className="Sidebar">
        {props.categories.map((element) => (
          <div
            id={element.id}
            key={element.id}
            value={element.id}
            className="sidebaritem"
            onClick={(e) => onselectionchange(e)}
          >
            {element.name}
          </div>
        ))}
      </div>
      <div className="sidedropdown">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={onselectionchange}
            label="Select"
          >
            {props.categories.map((element) => (
              <MenuItem key={element.id} value={element.id}>
                {element.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Sidebar;
