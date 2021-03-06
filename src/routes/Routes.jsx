import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}
