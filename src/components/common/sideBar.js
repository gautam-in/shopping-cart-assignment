import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "96%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  sidebaritem: {
      borderBottom: "0.5px solid black",
      cursor: "pointer",
      fontSize: "18px"
  },
  selectedsidebar: {
      borderBottom: "0.5px solid black",
      cursor: "pointer",
      fontSize: "14px"


  },
  drawer: {

    [theme.breakpoints.up("xsmall")]: {
      width: "200px",
    },
    [theme.breakpoints.up("small")]: {
      width: "230px",
    },
    [theme.breakpoints.up("medium")]: {
      width: "230px",
    },
    [theme.breakpoints.up("large")]: {
      width: "300px",
    },
    flexShrink: 0,
  },
  navigationContainer: {
    height: `calc(100% - 60px)`,
    padding: "6% 6% 0% 6%",
  },
  navigationMenuContainer: {
    height: `calc(100% - 60px)`,
  },
  list: {
    width: "100%",
  },
  listItem: {
    height: "35px",
    padding: "0px 0px 0px 7px",
  },
  drawerPaper: {
    backgroundColor: "#d1D3D4",
    color: "black",
    [theme.breakpoints.up("xsmall")]: {
      width: "200px",
      fontSize: "10px",
    },
    [theme.breakpoints.up("small")]: {
      width: "230px",
      fontSize: "12px",
    },
    [theme.breakpoints.up("medium")]: {
      width: "230px",
      fontSize: "14px",
    },
    [theme.breakpoints.up("large")]: {
      width: "300px",
      fontSize: "14px",
    },
    borderRight: "none",
    boxShadow: "0px 4px 4px #D8D8D9",
  },

}));

function Sidebar(props) {
  const classes = useStyles();
  const [category, setcategory] = React.useState("");
  const onselectionchange = (e) => {
    const tempcategory = e.target.id || e.target.value || "";
    props.eventhandler(
      category === (e.target.id || e.target.value) ? "" : tempcategory
    );
    category === (e.target.id || e.target.value)
      ? setcategory("")
      : setcategory(e.target.id || e.target.value);
  };
  return (
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    >
    <div className={classes.navigationContainer}>
      <div className={classes.navigationMenuContainer}>
        <List 
          component="nav"
          className={classes.list}
        >
        {props.categories.map((element) => (
          <List key={element.id}>
          <ListItem
            id={element.id}
            key={element.id}
            value={element.id}
            className={
              (category === element.id) ? classes.sidebaritem : classes.selectedsidebar

            }
            onClick={(e) => onselectionchange(e)}
          >
            {element.name}
          </ListItem>
          </List>
        ))}
        </List>
      </div>

    </div>
    </Drawer>
  );
}

export default Sidebar;
