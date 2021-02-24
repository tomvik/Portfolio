import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
  Fab,
} from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import { kNavLinks } from "../urls";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import BackToTop from "./BackToTop";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const Header = () => {
  const classes = useStyles();
  const home_title = kNavLinks[0].title;
  const home_path = kNavLinks[0].path;
  return (
    <React.StrictMode>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
              <Link to={home_path} key={"Icon-" + home_title}>
                <IconButton edge="start" color="inherit" aria-label="home">
                  <Home fontSize="large" />
                </IconButton>
              </Link>
              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                >
                  {kNavLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
                <SideDrawer navLinks={kNavLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </React.StrictMode>
  );
};
export default Header;
