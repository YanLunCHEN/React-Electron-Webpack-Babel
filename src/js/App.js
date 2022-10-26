
import React from 'react';
import WelcomeView from './views/Welcome';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


function ChatApp() {
 

  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <WelcomeView />
          </Route>
        </Switch>
    </Router>
  )
}

export default function App() {
  return (
   
      <ChatApp />
    
  )
}
