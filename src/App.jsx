import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UpdateConversationPage from './pages/UpdateConversationPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/update/:conversationId" component={UpdateConversationPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
