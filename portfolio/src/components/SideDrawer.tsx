import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import type { NavLinkType } from "../urls";

type SideDrawerProps = {
  navLinks: NavLinkType;
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

const SideDrawer = ({ navLinks }: SideDrawerProps) => {
  const classes = useStyles();

  const [toogleState, setToogleState] = useState({ right: false });

  const toggleDrawer = (open: boolean) => (
    event: React.MouseEvent | React.KeyboardEvent
  ) => {
    setToogleState({ right: open });
  };

  const sideDrawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={toogleState.right}
        onClose={toggleDrawer(false)}
      >
        {sideDrawerList()}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
