import { memo } from "react";
import { useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Container } from "./MobileCategory.styles";

const MobileCategory = ({ active, changeFilter }) => {
  const { categories } = useSelector((state) => state.home);

  return (
    <Container>
      <FormControl variant="filled">
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={active}
          onChange={(e) => changeFilter(e.target.value)}
        >
          <MenuItem value={""}>All</MenuItem>
          {categories.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default memo(MobileCategory);
