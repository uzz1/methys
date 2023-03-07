import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SideDrawerNavigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shipments from './pages/Shipments';
import Projects from './pages/Projects';
import Businesses from './pages/Businesses';
import News from './pages/News';
import shipmentsData from './data/table-data.json';

function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
    <SideDrawerNavigation handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open} />
    <div className={`App ${open}`}>
<Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shipments"component={Shipments}/> 
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/businesses" component={Businesses}/>
          <Route exact path="/news" component={News}/>
          <Route path="*" component={Home}/>
        </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
