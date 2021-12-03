import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';

const Messages = () => {
  return (
    <BrowserRouter basename="/messages">
      <div className="div" style={{ fontSize: '100px' }}>
        Messages
        <Link to="/one">ONE</Link>
        <Link to="/two">TWO</Link>
        <Route path="/one" render={() => <div>ONE</div>} />
        <Route path="/two" render={() => <div>TWO</div>} />
      </div>
    </BrowserRouter>
  );
};

export default Messages;
