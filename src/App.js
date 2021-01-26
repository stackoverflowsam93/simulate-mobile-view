import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Other from './pages/Other';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Main} />
        <Route path={'/other'} exact component={Other} />
      </Switch>
    </Router>
  );
};

export default App;
