import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Menu } from '@material-ui/icons';
import "./Navigation.css"
import Logo from "../assets/Logo.svg";
import Menubg from "../assets/menu.svg"
import { Link } from 'react-router-dom';
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
    padding: "20px",
  },
  list: {
    color: "white",
    fontWeight: 'bold'
  },
  burgerIcon: {
    position: "fixed",
    top: "10px",
    left: "10px",
    color: "white",
    fontSize: "large",
  },
  icon: {
    color: "white"
  },
}));

interface NavItem {
  label: string;
  icon: JSX.Element;
  path: string
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <Home />, path: "/" },
  { label: 'Shipments', icon: <Home />, path: "/shipments" },
  { label: 'Projects', icon: <Home />, path: "/projects" },
  { label: 'Businesses', icon: <Home />, path: "/businesses" },
  { label: 'News', icon: <Home />, path: "/news" },

];

const SideDrawerNavigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    
    <div>
      <Menu fontSize="large" className="burger-icon" onClick={handleToggleDrawer}/>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={open}
        onClose={handleToggleDrawer}
        >
        
        <img className={classes.logo} src={Logo} alt="Logo"/>
        <List className={classes.list}>
          {navItems.map((item, index) => (
             <ListItem button key={index}>
               <a href={item.path}>
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
             </a> 
           </ListItem>
            
          ))}
        </List>
        
      </Drawer>
      </div>
  );
};

export default SideDrawerNavigation;