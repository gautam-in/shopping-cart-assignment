import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function SideBar(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={7}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

SideBar.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.white,
    display: 'flex',
    height: 900,
    border:'1px solid white !important'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Fruits & Vegetables" {...a11yProps(0)} />
        <Tab label="Bakery Cakes and Dairy" {...a11yProps(1)} />
        <Tab label="Beverages" {...a11yProps(2)} />
        <Tab label="Beauty and Hygiene" {...a11yProps(3)} />
        <Tab label="Baby Care" {...a11yProps(4)} />
      </Tabs>
      <SideBar value={value} index={0}>
        Item One
      </SideBar>
      <SideBar value={value} index={1}>
        Item Two
      </SideBar>
      <SideBar value={value} index={2}>
        Item Three
      </SideBar>
      <SideBar value={value} index={3}>
        Item Four
      </SideBar>
      <SideBar value={value} index={4}>
        Item Five
      </SideBar>
    </div>
  );
}
