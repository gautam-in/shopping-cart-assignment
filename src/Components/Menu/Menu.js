import React, { useState } from "react";
import { Select, FormControl, MenuItem, InputLabel, makeStyles } from "@material-ui/core";
import "./Menu.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "96%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const [category, setcategory] = useState("");
  const onselectionchange = (e) => {
    const tempcategory = e.target.id || e.target.value || "";
    props.eventhandler(category === (e.target.id || e.target.value) ? "" : tempcategory);
    category === (e.target.id || e.target.value) ? setcategory(""): setcategory(e.target.id || e.target.value);
  };
  return (
    <div>
      <div className="Sidebar">
        {props.categories.map((element) => (
          <div
            id={element.id}
            key={element.id}
            value={element.id}
            className={
              "sidebaritem" +
              (category === element.id ? " selectedsidebar" : "")
            }
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
