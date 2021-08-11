import React from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import { Dehaze } from "@material-ui/icons";

const useStyles = makeStyles(createStyles({
    root: {
        width: '100%'
    },
    menuButton: {

    },
    title: {

    }
}));

export default function MSAHeader() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
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