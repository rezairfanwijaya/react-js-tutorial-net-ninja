import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommentList from './CommentList';
import UserList from './UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/commentar">
              <CommentList />
            </Route>

            <Route path="/user">
              <UserList />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
