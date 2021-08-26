import React, { useState } from "react";
import {AppBar, Button, createStyles, Drawer, IconButton, makeStyles, Theme, Toolbar, Typography} from '@material-ui/core';
import { Dehaze } from "@material-ui/icons";
import { Sidebar } from "../Sidebar/Sidebar";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
}));


export default function MSAHeader() {
  
  const [sideBar, setSideBar] = useState(false);

    const classes = useStyles();

    const toggleSideBar = () => {
      setSideBar(!sideBar);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSideBar}
            >
                <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                <Sidebar />
                </Drawer>
            <Dehaze />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              My super cool web app
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }