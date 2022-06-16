import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation } from "react-router-dom";

export default function Sidebar({ filteredCategory, handleProduct }) {
  const { search } = useLocation();

  const [activeId, setActiveId] = React.useState(null);

  React.useMemo(() => {
    if (search.includes("?id")) {
      setActiveId(search.slice(4));
    }
  }, [search]);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: true });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      allowFullScreen={false}
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {filteredCategory.map((item, index) => (
          <ListItem
            onClick={() => handleProduct(item.id)}
            key={item.id}
            disablePadding
            sx={{
              borderStyle: item.id === activeId ? "outset" : "inset",
              borderWidth: item.id === activeId ? "2px" : "1px",
            }}
          >
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={true}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "lightgray",
            position: "relative",
          },
        }}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
