import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Link, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Menu, ChevronLeft } from '@material-ui/icons';
import "./Navigation.css"
import Logo from "../assets/logo.svg";
import Menubg from "../assets/menu.svg"
import Dashboard from "../assets/icons/home.svg";
import Shipments from "../assets/icons/shipments.svg";
import Businesses from "../assets/icons/businesses.svg";
import Projects from "../assets/icons/projects.svg";
import News from "../assets/icons/news.svg";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
    height: "100vh",
    backgroundImage: `url(${Menubg})`,
    backgroundSize: "cover",
  },
  logo: {
    padding: "30px",
  },
  list: {
    color: "white",
    fontWeight: 'bold'
  },
  burgerIcon: {
    position: "fixed",
    top: "50px",
    left: "30px",
    color: "white",
    fontSize: "large",
    marginTop: "30px"
  },
  icon: {
    color: "white",
    marginRight: "-10px",
    marginLeft: "20px",
  },
  iconArrow: {
    color: "white",
    textAlignn: "right",
    width: "50px",
  },
  arrowDiv: {
    textAlign: "right",
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  link: {
    display: "inline",
  },
}));

interface NavItem {
  label: string,
  icon: JSX.Element,
  path: string
}


const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <img src={Dashboard} alt="Dashboard"/>, path: "/" },
  { label: 'Shipments', icon: <img src={Shipments} alt="Shipments"/>, path: "/shipments" },
  { label: 'Projects', icon: <img src={Projects} alt="Projects"/>, path: "/projects" },
  { label: 'Businesses', icon: <img src={Businesses} alt="Businesses"/>, path: "/businesses" },
  { label: 'News', icon: <img src={News} alt="News"/>, path: "/news" },

];

interface Props {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;  
  open: boolean
}

const SideDrawerNavigation: React.FC<Props>  = ({handleDrawerOpen, handleDrawerClose, open}) => {
  const classes = useStyles();

 
  return (
    
    <div>
      <Menu fontSize="large" className="burger-icon" onClick={handleDrawerOpen}/>
      <Drawer
        variant="persistent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={open}
        onClose={handleDrawerClose}
        >
        <img className={classes.logo} src={Logo} alt="Logo"/>
        <div className={classes.arrowDiv}>
        <ChevronLeft className={classes.iconArrow} onClick={handleDrawerClose} />
        </div>
        <List className={classes.list}>
          {navItems.map((item, index) => (
              <a className={classes.link} href={item.path}>
            <ListItem key={index} button className={classes.row}>
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
           </ListItem>
           </a> 
          ))}
        </List>
        
      </Drawer>
      </div>
  );
};

export default SideDrawerNavigation;